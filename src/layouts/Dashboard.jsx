import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import DashboardDrawer from '../components/DashboardDrawer';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <DashboardDrawer></DashboardDrawer>
            <div className='outlet'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;