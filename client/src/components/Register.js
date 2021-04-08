import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import authSvg from "../assests/auth.svg";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../js/action";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [lastname, setLastName] = useState("");
  const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('image', image[0])
    formData.append("email",email)
    formData.append("name",name)
    formData.append("lastname",lastname)
    formData.append("password",password)

    // const newUser = { name, lastname,image, email, password };
    dispatch(register(formData));
  };

  const { isAuth, loading, errors } = useSelector((state) => state.userReducer);
  

  return (
   <div>
    {
      loading ? <h1> Loading ...</h1> : isAuth ? <Redirect to="/profile" /> :
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign Up for ChatHub
            </h1>

            <form className="w-full flex-1 mt-8 text-indigo-500" encType="multipart/form-data">
              <div className="mx-auto max-w-xs relative ">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Name"
                  onChange={e => setName(e.target.value)} value={name}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="LastName"
                  onChange={e => setLastName(e.target.value)} value={lastname}
                />
                
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)} value={email}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)} value={password} 
                />
                <div className="form-group">
                  <label htmlFor="file">Choose image profil</label>
                <input 
                type="file"
                filename="image"
                className="form-control-file"
                onChange={e => setImage(e.target.files)} 

                 />
                </div>
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={registerUser}>
                  <span className="ml-3">Submitted</span>

                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                </button>
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign with email or social login
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3
         bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                >
                  <i className="fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500" />

                  <Link to="/">
                    <span className="ml-4">Sign In</span>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
      ;
    </div>
    }
    </div>
  );
};

export default Register;
