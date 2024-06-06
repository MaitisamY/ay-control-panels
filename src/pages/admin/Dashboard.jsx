import '../../styles/InnerAppStyles.css'

import useThemeStore from '../../stores/useThemeStore.js';
import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen, BsPeople } from 'react-icons/bs';
import { GoTools, GoPeople, GoLog } from 'react-icons/go';
import { GrGroup, GrIteration, GrCurrency, GrLineChart } from 'react-icons/gr';

import Header from "../../partials/Header";
import BoxOne from "../../components/BoxOne";
import BoxTwo from "../../components/BoxTwo";
import Main from "../../partials/Main";
import Sidebar from "../../components/Sidebar";
import ThemeSettings from "../../components/ThemeSettings";

const AdminDashboard = () => {

    const { theme } = useThemeStore();

    return (
        <div 
            className={`inner-app-container 
            ${ theme === 'green' ? 'green-theme' 
                : theme === 'red' ? 'red-theme' 
                    : theme === 'orange' ? 'orange-theme' 
                        : theme === 'yellow' ? 'yellow-theme' 
                            : theme === 'black&white' ? 'black-and-white-theme'
                            : '' }`}
        >
            <ThemeSettings />
            <Header>
                <div className="level-one">
                    <BoxOne />
                </div>

                <div className="level-two">
                    <BoxTwo 
                        boxes={[
                            { heading: "Sales", icon: <GrCurrency className="green" />, value: "3400/-" },
                            { heading: "Orders", icon: <GrIteration className="blue" />, value: "24" },
                            { heading: "Clients", icon: <GrGroup className="torquoise" />, value: "10" },
                            { heading: "Revenue", icon: <GrLineChart className="purple" />, value: "3400/-" },
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
                            { title: "Salesmen", link: "/admin/salesmen", icon: <GoPeople /> },
                            { title: "Clients", link: "/admin/clients", icon: <BsPeople /> },
                            { title: "Invoices", link: "/admin/invoices", icon: <GoLog /> },
                        ]} 
                    />
                </div>
            </Main>
        </div>
    )
};

export default AdminDashboard;
