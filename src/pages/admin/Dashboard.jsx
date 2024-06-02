import '../../styles/innerAppStyles.css'
import '../../styles/themeSettings.css';

import useThemeContainerStore from '../../stores/useThemeContainerStore.js';
import { CSSTransition } from 'react-transition-group';
import { FaMoneyBill, FaBox, FaUsers, FaMoneyCheck, FaX } from 'react-icons/fa6';
import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen, BsPersonCheck, BsPeople, BsReceipt, BsWrenchAdjustableCircle } from 'react-icons/bs';

import Header from "../../partials/Header";
import BoxOne from "../../components/BoxOne";
import BoxTwo from "../../components/BoxTwo";
import Main from "../../partials/Main";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
    const { isOpen, toggleThemeContainer } = useThemeContainerStore();
    /* Using Zustand store. */

    return (
        <div className="inner-app-container">
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="theme-container"
                unmountOnExit
            >
                <div className="theme-container">
                    <a className="close-btn" onClick={toggleThemeContainer}><FaX /></a>
                    <h1>Theme settings</h1>
                </div>
            </CSSTransition>
            <Header>
                <div className="level-one">
                    <BoxOne />
                </div>

                <div className="level-two">
                    <BoxTwo 
                        boxes={[
                            { heading: "Sales", icon: <FaMoneyBill className="green" />, value: "3400/-" },
                            { heading: "Orders", icon: <FaBox className="blue" />, value: "24" },
                            { heading: "Clients", icon: <FaUsers className="purple" />, value: "10" },
                            { heading: "Revenue", icon: <FaMoneyCheck className="teal" />, value: "3400/-" },
                        ]} 
                    />
                </div>
            </Header>
            <Main>
                <div className="bar">
                    <Sidebar 
                        menu={[
                            { title: "Dashboard", link: "/admin/dashboard", icon: <BsSpeedometer2 /> },
                            { title: "Orders", link: "/admin/orders", icon: <BsBox /> },
                            { title: "Quotes", link: "/admin/quotes", icon: <BsChatRightQuote /> },
                            { title: "Vectors", link: "/admin/vectors", icon: <BsVectorPen /> },
                            { title: "Salesmen", link: "/admin/salesmen", icon: <BsPersonCheck /> },
                            { title: "Clients", link: "/admin/clients", icon: <BsPeople /> },
                            { title: "Invoices", link: "/admin/invoices", icon: <BsReceipt /> },
                            { title: "Settings", link: "/admin/settings", icon: <BsWrenchAdjustableCircle /> },
                        ]} 
                    />
                </div>
            </Main>
        </div>
    )
};

export default AdminDashboard;
