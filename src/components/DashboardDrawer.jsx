import { NavLink } from 'react-router-dom';
import './DashboardDrawer.css'
// import userImg from '../../assets/Images/Dashboard/userImg.jpg'

const DashboardDrawer = () => {
    return (
        <div className='dashboard-drawer'>
            <div className='user-info-container'>
                {/* {
                    
                    user?
                    <>
                    <img src={user?.photoURL} />
                    <h4>{user?.displayName}</h4>
                    <p>{user?.email}</p>
                    </>
                    
                    :
                   <>
                    <img src={userImg} alt="" />
                    <h4>User Name</h4>
                    <p>example@email.com</p>
                   </>
                } */}
                 <img src="" alt="" />
                    <h4>User Name</h4>
                    <p>example@email.com</p>
            </div>
            {/* <hr className='' /> */}
            <div className='options'>
                <ul>
                    <h4>Shopping</h4>
                    <li><NavLink to='/' className="navlink">Home</NavLink></li>
                    <li><NavLink to='#' className="navlink">My WIshlist</NavLink></li>
                    <li><NavLink to='#' className="navlink">Favourite</NavLink></li>
                    <li><NavLink to='./cart' className="navlink">Cart</NavLink></li>
                    <li><NavLink to='#' className="navlink">Orders</NavLink></li>
                    <li><NavLink to='#' className="navlink">Address</NavLink></li>
                    <li><NavLink to='#' className="navlink">Payment Method</NavLink></li>
                    <li><NavLink to='#' className="navlink">Recently Viewed</NavLink></li>
                </ul>
                <ul>
                    <h4>Settings</h4>
                    <li><NavLink to='#' className="navlink">Account</NavLink></li>
                    <li><NavLink to='#' className="navlink">Security</NavLink></li>
                    <li><NavLink to='#' className="navlink">Privacy</NavLink></li>
                    <li><NavLink to='#' className="navlink">Theme</NavLink></li>
                    {/* <li><button onClick={handleLogOut}>Log Out</button></li> */}
                </ul>
            </div>
        </div>
    );
};

export default DashboardDrawer;