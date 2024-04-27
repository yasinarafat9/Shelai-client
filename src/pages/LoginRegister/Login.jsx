import { Link } from 'react-router-dom';
import './LoginRegister.css';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Login = () => {
    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className='input-container'>
                    <h1>Login</h1>
                    <br />
                    <div>
                        <h4>Email or Phone :</h4>
                        <input type="email" placeholder='Email or Phone Number' />
                    </div>
                    <br />

                    <div>
                        <h4>Password :</h4>
                        <input type="password" placeholder='Enter your password' />
                        <small>Forgot Password?</small>
                    </div>
                    <br />
                    <button className='btn-login'>Login</button>
                    <br />
                    <br />
                    <hr />
                    <div className='login-bottom'>
                        <small>New Here? <Link to="/register">Create an Account</Link></small>

                        <h5>Or Log in Using:</h5>
                        <ul >
                            <li><FaGoogle></FaGoogle></li>
                            <li><FaFacebook></FaFacebook></li>
                            <li><FaTwitter></FaTwitter></li>
                        </ul>
                    </div>
                    <br />
                </div>

                <img src="https://i.pinimg.com/564x/3a/e6/fc/3ae6fc78c0718a02d06ceab56227ca32.jpg" alt="" />
            </div>
        </div>
    );
};

export default Login;