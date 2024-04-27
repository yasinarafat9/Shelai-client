import { Link } from 'react-router-dom';
import './LoginRegister.css';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Register = () => {
    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className='input-container'>
                    <h3>Please Register</h3>
                    {/* <hr /> */}
                    <div>
                        <p>Your Name :</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Email or Phone :</p>
                        <input type="email" />
                    </div>


                    <div>
                        <p>Password :</p>
                        <input type="password" />
                        <p>Retype Password :</p>
                        <input type="password" />
                    </div>

                    <button className='btn-login'>Register</button>
                    <hr />
                    <div className='login-bottom'>
                        <small>Have an Account? <Link to="/login">Please Login</Link></small>
                        <h5>Or Log in Using:</h5>
                        <ul >
                            <li><FaGoogle></FaGoogle></li>
                            <li><FaFacebook></FaFacebook></li>
                            <li><FaTwitter></FaTwitter></li>
                        </ul>
                    </div>
                </div>
                <img src="https://i.pinimg.com/564x/3a/e6/fc/3ae6fc78c0718a02d06ceab56227ca32.jpg" alt="" />
            </div>
        </div>
    );
};

export default Register;