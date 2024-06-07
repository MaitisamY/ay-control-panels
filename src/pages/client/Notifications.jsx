import '../../styles/InnerAppStyles.css'

import { useRef, useState, useEffect } from 'react';
import useThemeStore from '../../stores/useThemeStore.js';
import useResponsiveSidebarStore from '../../stores/useResponsiveSidebarStore.js';
import { useAuth } from '../../context/AuthContext';
import useThemeContainerStore from '../../stores/useThemeContainerStore.js';
import useMassImports from '../../utils/MassImports.jsx';

import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen } from 'react-icons/bs';
import { GoLog, GoX, GoSignOut } from 'react-icons/go';
import { GrMoney, GrIteration, GrCurrency, GrCheckmark } from 'react-icons/gr';
import { TfiAlignJustify, TfiBell, TfiUser, TfiSettings, TfiEmail, TfiReload } from 'react-icons/tfi';
import { CSSTransition } from 'react-transition-group';

import Header from "../../partials/Header";
import BoxOne from "../../components/BoxOne";
import BoxTwo from "../../components/BoxTwo";
import Main from "../../partials/Main";
import Sidebar from "../../components/Sidebar";
import ThemeSettings from "../../components/ThemeSettings";
import ResponsiveSidebar from "../../components/ResponsiveSidebar";

const Notifications = () => {

    const { logout } = useAuth();
    const { theme } = useThemeStore();
    const { toggleThemeContainer } = useThemeContainerStore();
    const { isSidebarOpen, onToggleSidebar } = useResponsiveSidebarStore();
    const { isStatusReloading  } = useMassImports();

    const sidebarRef = useRef(null);

    document.title = "Notifications | @organization";

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
                                { title: "Dashboard", link: "/client/dashboard", icon: <BsSpeedometer2 /> },
                                { title: "Orders", link: "/client/orders", icon: <BsBox /> },
                                { title: "Quotes", link: "/client/quotes", icon: <BsChatRightQuote /> },
                                { title: "Vectors", link: "/client/vectors", icon: <BsVectorPen /> },
                                { title: "Invoices", link: "/client/invoices", icon: <GoLog /> },
                                { title: "Notifications", link: "/client/notifications", icon: <TfiBell /> },
                                { title: "Inbox", link: "/client/inbox", icon: <TfiEmail /> },
                                { title: "Profile", link: "/client/profile", icon: <TfiUser /> },
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
                <div className="container">
                    <div className="row">
                        <h1>
                            Notifications
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

export default Notifications;
