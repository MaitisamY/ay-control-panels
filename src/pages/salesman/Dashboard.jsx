import '../../styles/InnerAppStyles.css'

import useThemeStore from '../../stores/useThemeStore.js';
import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen, BsPeople } from 'react-icons/bs';
import { GrGroup, GrIteration, GrCurrency, GrMoney } from 'react-icons/gr';

import Header from "../../partials/Header";
import BoxOne from "../../components/BoxOne";
import BoxTwo from "../../components/BoxTwo";
import Main from "../../partials/Main";
import Sidebar from "../../components/Sidebar";
import ThemeSettings from "../../components/ThemeSettings";

const SalesmanDashboard = () => {

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
                            { heading: "Sales", icon: <GrCurrency className="green" />, value: "2100/-" },
                            { heading: "Orders", icon: <GrIteration className="blue" />, value: "24" },
                            { heading: "Clients", icon: <GrGroup className="torquoise" />, value: "10" },
                            { heading: "Commissions", icon: <GrMoney className="purple" />, value: "800/-" },
                        ]} 
                    />
                </div>
            </Header>
            <Main>
                <div className="bar">
                    <Sidebar 
                        menu={[
                            { title: "Dashboard", link: "/salesman/dashboard", icon: <BsSpeedometer2 /> },
                            { title: "Orders", link: "/salesman/orders", icon: <BsBox /> },
                            { title: "Quotes", link: "/salesman/quotes", icon: <BsChatRightQuote /> },
                            { title: "Vectors", link: "/salesman/vectors", icon: <BsVectorPen /> },
                            { title: "Clients", link: "/salesman/clients", icon: <BsPeople /> },
                        ]} 
                    />
                </div>
            </Main>
        </div>
    )
};

export default SalesmanDashboard;
