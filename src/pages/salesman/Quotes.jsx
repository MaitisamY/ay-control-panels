import '../../styles/InnerAppStyles.css'

import { useRef } from 'react';
import useThemeStore from '../../stores/useThemeStore.js';
import useResponsiveSidebarStore from '../../stores/useResponsiveSidebarStore.js';
import { useAuth } from '../../context/AuthContext';
import useThemeContainerStore from '../../stores/useThemeContainerStore.js';
import useMassImports from '../../utils/MassImports.jsx';
import useTitleProvider from '../../utils/TitleProvider.jsx';

import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen, BsPeople } from 'react-icons/bs';
import { GoX, GoSignOut } from 'react-icons/go';
import { GrGroup, GrIteration, GrCurrency, GrMoney } from 'react-icons/gr';
import { TfiAlignJustify, TfiBell, TfiUser, TfiSettings, TfiReload } from 'react-icons/tfi';
import { CSSTransition } from 'react-transition-group';

import Header from "../../partials/Header";
import BoxOne from "../../components/BoxOne";
import BoxTwo from "../../components/BoxTwo";
import Main from "../../partials/Main";
import Sidebar from "../../components/Sidebar";
import ThemeSettings from "../../components/ThemeSettings";
import ResponsiveSidebar from "../../components/ResponsiveSidebar";

const Quotes = () => {

    const { logout } = useAuth();
    const { theme } = useThemeStore();
    const { toggleThemeContainer } = useThemeContainerStore();
    const { isSidebarOpen, onToggleSidebar } = useResponsiveSidebarStore();
    const { isStatusReloading  } = useMassImports();
    const { title } = useTitleProvider();

    const sidebarRef = useRef(null);

    document.title = title;

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

            {/* Responsive logo, sidebar toggle and sidebar */}
            <div className="responsive-menu">
                <h1 className="logo">@organization</h1>
                <a className="toggler" onClick={onToggleSidebar}><TfiAlignJustify /></a>
            </div>
            
            <CSSTransition
                in={isSidebarOpen}
                timeout={300}
                classNames="responsive-sidebar"
                unmountOnExit
                nodeRef={sidebarRef}
            >
                <div ref={sidebarRef} className="responsive-sidebar">
                    <div className="elements-holder">
                        <a className="close-btn" onClick={onToggleSidebar}><GoX /></a>
                        <ResponsiveSidebar 
                            menu={[
                                { title: "Dashboard", link: "/salesman/dashboard", icon: <BsSpeedometer2 /> },
                                { title: "Orders", link: "/salesman/orders", icon: <BsBox /> },
                                { title: "Quotes", link: "/salesman/quotes", icon: <BsChatRightQuote /> },
                                { title: "Vectors", link: "/salesman/vectors", icon: <BsVectorPen /> },
                                { title: "Clients", link: "/salesman/clients", icon: <BsPeople /> },
                                { title: "Notifications", link: "/salesman/notifications", icon: <TfiBell /> },
                                { title: "Profile", link: "/salesman/profile", icon: <TfiUser /> },
                                { title: "Settings", onHandleClick: () => toggleThemeContainer(), icon: <TfiSettings /> },
                                { title: "Logout", onHandleClick: () => logout(), icon: <GoSignOut /> },
                            ]}
                        />
                    </div>
                </div>
            </CSSTransition>
            {/* Responsive logo, sidebar toggle and sidebar */}

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
                <div className="container">
                    <div className="row">
                        <h1>
                            Quotes 
                            <span>
                                {
                                    isStatusReloading ? 
                                    <TfiReload className="loader" /> 
                                    : 'The system is upto date.'
                                }
                            </span>
                        </h1>
                    </div>
                </div>
            </Main>
        </div>
    )
};

export default Quotes;
