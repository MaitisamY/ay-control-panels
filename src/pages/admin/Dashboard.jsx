import { useAuth } from "../../context/AuthContext";

import { FaMoneyBill, FaBox, FaUsers, FaMoneyCheck } from 'react-icons/fa6';
import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen, BsPersonCheck, BsPeople, BsReceipt, BsWrenchAdjustableCircle } from 'react-icons/bs';

import Header from "../../partials/Header";
import BoxOne from "../../components/BoxOne";
import BoxTwo from "../../components/BoxTwo";
import Main from "../../partials/Main";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {

    const { user, logout } = useAuth();

    return (
        <>
            <Header>
                <div className="level-one">
                    <BoxOne />
                </div>

                <div className="level-two">
                    <BoxTwo heading="Sales" icon={<FaMoneyBill className="green" />} value="3400/-" />
                    <BoxTwo heading="Orders" icon={<FaBox className="blue" />} value="24" />
                    <BoxTwo heading="Clients" icon={<FaUsers className="purple" />} value="10" />
                    <BoxTwo heading="Revenue" icon={<FaMoneyCheck className="teal" />} value="3400/-" />
                </div>
            </Header>
            <Main>
                <div className="bar">
                    <Sidebar menu={[
                        { title: "Dashboard", link: "/admin/dashboard", icon: <BsSpeedometer2 /> },
                        { title: "Orders", link: "/admin/orders", icon: <BsBox /> },
                        { title: "Quotes", link: "/admin/quotes", icon: <BsChatRightQuote /> },
                        { title: "Vectors", link: "/admin/vectors", icon: <BsVectorPen /> },
                        { title: "Salesmen", link: "/admin/salesmen", icon: <BsPersonCheck /> },
                        { title: "Clients", link: "/admin/clients", icon: <BsPeople /> },
                        { title: "Invoices", link: "/admin/invoices", icon: <BsReceipt /> },
                        { title: "Settings", link: "/admin/settings", icon: <BsWrenchAdjustableCircle /> },
                    ]} />
                </div>
            </Main>
        </>
    )
};

export default AdminDashboard;
