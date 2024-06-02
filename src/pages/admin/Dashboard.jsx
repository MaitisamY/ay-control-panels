import { useAuth } from "../../context/AuthContext";

import { FaMoneyBill, FaBox, FaUsers, FaMoneyCheck } from "react-icons/fa6";

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
                        { title: "Dashboard", link: "/admin/dashboard" },
                        { title: "Orders", link: "/admin/orders" },
                        { title: "Quotes", link: "/admin/quotes" },
                        { title: "Vectors", link: "/admin/vectors" },
                        { title: "Salesmen", link: "/admin/salesmen" },
                        { title: "Clients", link: "/admin/clients" },
                        { title: "Invoices", link: "/admin/invoices" },
                        { title: "Settings", link: "/admin/settings" },
                    ]} />
                </div>
            </Main>
        </>
    )
};

export default AdminDashboard;
