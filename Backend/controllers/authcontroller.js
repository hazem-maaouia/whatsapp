const User = require("../models/User");
const mongoData = require("../models/Messages");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const { name, lastname, email, password } = req.body;
  const image = req.file.path;

  try {
    let user = await User.findOne({ email });
    //1 check if the user already exist
    if (user) {
      return res.status(400).json({ msg: "user already exist" });
    }
    user = new User({ name, lastname, image, email, password });
    //2 create a new user
    if (req.file) {
      user.image = req.file.path
    }
  
    //3 hash the password
    const slat = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, slat);
    
    //4 save the user
    await user.save();
    //5 login {token}
    const payload = {
      userID: user._id,
    };
    const token = jwt.sign(payload, process.env.SECRET);
    //6 send {token,user}
    res.send({
      token,
      user: {
        name: user.name,
        lastname: user.lastname,
        image: user.image,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    //1 check if the user exist
    if (!user) {
      res.status(400).json([{ msg: "bad credentials email" }]);
    }
    //2 compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json([{ msg: "bad credentials password" }]);
    }
    const payload = {
      userID: user._id,
    };
    const token = jwt.sign(payload, process.env.SECRET);
    //6 send {token,user}
    res.send({
      token,
      user: {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        _id: user._id,
      },
    });
    //3 login user {token,user}
  } catch (error) {
    console.error(error);
  }
};
const getAuthUser = async (req, res) => {
  res.send({ user: req.user });
};
const messagechat = async (req, res) => {
  const dbMessage = req.body;
  mongoData.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
};
const getMessage = async (req, res) => {
  mongoData.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const newmessage=async (req,res) => {
  mongoData.updateOne(
    {_id:req.query.id},
    {$push:{conversation:req.body}},
    (err,data) => {
      if(err){
        console.log("error saving message ...")
        console.log(err)
        res.status(500).send(err)

      }else {
        res.status(201).send(data)
      }
    }
  )
}
module.exports = { register, login, getAuthUser, messagechat, getMessage ,newmessage};
