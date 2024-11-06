import { useState } from "react";
import Spline from '@splinetool/react-spline';
import formVideo2 from '../../assets/FormBackground.mp4';
import PropTypes from 'prop-types';

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        handleLogin(email,password); //So basically i just transfered the email and password to the handlelogin function for validation...yes its that simple
        setEmail("");
        setPassword("");
    };

    return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
          
            <div className="absolute top-0 left-0 w-full h-full -z-10">
            <Spline scene="https://prod.spline.design/CvqE0IHTE6TXLCqn/scene.splinecode" />
            </div>

           
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

           
            <div className="relative z-10 border-2 rounded-xl border-emerald-600 sm:pt-10 pl-20 pb-5 pr-20 w-full max-w-md backdrop-blur-md">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-20"
                    src={formVideo2}
                    autoPlay
                    loop
                    muted
                ></video>

                <h1 className="relative text-lg sm:text-xl text-center mb-6 sm:mb-10 text-white font-bold">
                    Log into your Profile
                </h1>
                <form
                    onSubmit={submitHandler}
                    className="relative flex flex-col items-center justify-center"
                >
                    
                    <span>Enter your Email:</span>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="outline-none mb-3 bg-transparent border-2 border-emerald-600 text-lg sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-full placeholder:text-gray-400 w-full"
                        type="email"
                        placeholder="Enter your Email..."
                    />
                    
                    <span>Enter Password:</span>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="outline-none bg-transparent border-2 border-emerald-600 text-lg sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-full mb-3 placeholder:text-gray-400 w-full"
                        type="password"
                        placeholder="Enter Password..."
                    />

                    <button className="mt-5 text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-all duration-300 text-lg sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-full w-full sm:w-auto">
                        Log in!
                    </button>
                    <span className="mt-10">Do have an account?
                        <a
                            className="text-emerald-600 hover:text-emerald-700 font-semibold underline transition-all duration-300"
                            href="#"
                        >
                            Sign Up!
                        </a>
                    </span>
                </form>
            </div>
        </div>
    );
};


Login.propTypes = {
    handleLogin: PropTypes.func, 
};

export default Login;


