import '../../styles/innerAppStyles.css'

import useThemeStore from '../../stores/useThemeStore.js';
import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen } from 'react-icons/bs';
import { GoLog } from 'react-icons/go';
import { GrMoney, GrIteration, GrCurrency, GrCheckmark } from 'react-icons/gr';

import Header from "../../partials/Header";
import BoxOne from "../../components/BoxOne";
import BoxTwo from "../../components/BoxTwo";
import Main from "../../partials/Main";
import Sidebar from "../../components/Sidebar";
import ThemeSettings from "../../components/ThemeSettings";

const CustomerDashboard = () => {

    const { theme } = useThemeStore();

    return (
        <div 
            className={`inner-app-container 
            ${ theme === 'green' ? 'green-theme' 
                : theme === 'red' ? 'red-theme' 
                    : theme=== 'orange' ? 'orange-theme' 
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
                            { heading: "Orders", icon: <GrIteration className="blue" />, value: "24" },
                            { heading: "Fulfilled", icon: <GrCheckmark className="green" />, value: "20" },
                            { heading: "Paid", icon: <GrMoney className="torquoise" />, value: "10" },
                            { heading: "Pending", icon: <GrCurrency className="purple" />, value: "800/-" },
                        ]} 
                    />
                </div>
            </Header>
            <Main>
                <div className="bar">
                    <Sidebar 
                        menu={[
                            { title: "Dashboard", link: "/client/dashboard", icon: <BsSpeedometer2 /> },
                            { title: "Orders", link: "/client/orders", icon: <BsBox /> },
                            { title: "Quotes", link: "/client/quotes", icon: <BsChatRightQuote /> },
                            { title: "Vectors", link: "/client/vectors", icon: <BsVectorPen /> },
                            { title: "Invoices", link: "/client/invoices", icon: <GoLog /> },
                        ]} 
                    />
                </div>
            </Main>
        </div>
    )
};

export default CustomerDashboard;
