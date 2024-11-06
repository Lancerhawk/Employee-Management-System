import { useState } from "react";
import Spline from '@splinetool/react-spline';
import formVideo2 from '../../assets/FormBackground.mp4';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Username is", username);
        console.log("Email is", email);
        console.log("Password is", password);

        setUsername("");
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
                    Create your Profile
                </h1>
                <form
                    onSubmit={submitHandler}
                    className="relative flex flex-col items-center justify-center"
                >
                    <span>Enter your Username:</span>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="outline-none mb-3 bg-transparent border-2 border-emerald-600 text-lg sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-full placeholder:text-gray-400 w-full"
                        type="text"
                        placeholder="Choose your Username..."
                    />
                    
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
                    
                    <span>Confirm Password:</span>
                    <input
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="outline-none bg-transparent border-2 border-emerald-600 text-lg sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-full placeholder:text-gray-400 w-full"
                        type="password"
                        placeholder="Re-enter Password..."
                    />

                    <button className="mt-5 text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-all duration-300 text-lg sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-full w-full sm:w-auto">
                        Send Request
                    </button>
                    <span className="mt-10">Already have an account?
                        <a
                            className="text-emerald-600 hover:text-emerald-700 font-semibold underline transition-all duration-300"
                            href="#"
                        >
                            Log in!
                        </a>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
