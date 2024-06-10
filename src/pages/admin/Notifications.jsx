import '../../styles/InnerAppStyles.css'

/* Contexts, hooks, stors and utils */
import { useRef } from 'react';
import useThemeStore from '../../stores/useThemeStore.js';
import useResponsiveSidebarStore from '../../stores/useResponsiveSidebarStore.js';
import { useAuth } from '../../context/AuthContext';
import useThemeContainerStore from '../../stores/useThemeContainerStore.js';
import useMassImports from '../../utils/MassImports';
import useTitleProvider from '../../utils/TitleProvider';
import { useMenu } from '../../utils/Menu'

/* Packages */
import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen, BsPeople } from 'react-icons/bs';
import { GoPeople, GoLog, GoX, GoSignOut } from 'react-icons/go';
import { GrGroup, GrIteration, GrCurrency, GrLineChart } from 'react-icons/gr';
import { TfiAlignJustify, TfiBell, TfiUser, TfiSettings, TfiReload } from 'react-icons/tfi';
import { CSSTransition } from 'react-transition-group';

/* Components */
import InnerAppContainer from '../../components/InnerAppContainer';
import Header from "../../partials/Header";
import BoxOne from "../../components/BoxOne";
import BoxTwo from "../../components/BoxTwo";
import Main from "../../partials/Main";
import Sidebar from "../../components/Sidebar";
import ThemeSettings from "../../components/ThemeSettings";
import ResponsiveSidebar from "../../components/ResponsiveSidebar";
import NotificationContent from "../../components/admin/NotificationContent";

const Notifications = () => {

    /* Destructuring of Contexts, hooks, stores and utils */
    const { logout } = useAuth();
    const { theme } = useThemeStore();
    const { toggleThemeContainer } = useThemeContainerStore();
    const { isSidebarOpen, onToggleSidebar } = useResponsiveSidebarStore();
    const { isStatusReloading  } = useMassImports();
    const { title } = useTitleProvider();
    const [ adminMenu ] = useMenu();

    /* Sidebar menu */
    const sidebarMenu = adminMenu.filter(menu => menu.isShown === true);

    /* Sidebar ref for NodeRef */
    const sidebarRef = useRef(null);

    /* Current document's title */
    document.title = title;

    return (
        <InnerAppContainer theme={theme}>
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
                                { title: "Dashboard", link: "/admin/dashboard", icon: <BsSpeedometer2 /> },
                                { title: "Orders", link: "/admin/orders", icon: <BsBox /> },
                                { title: "Quotes", link: "/admin/quotes", icon: <BsChatRightQuote /> },
                                { title: "Vectors", link: "/admin/vectors", icon: <BsVectorPen /> },
                                { title: "Salesmen", link: "/admin/salesmen", icon: <GoPeople /> },
                                { title: "Clients", link: "/admin/clients", icon: <BsPeople /> },
                                { title: "Invoices", link: "/admin/invoices", icon: <GoLog /> },
                                { title: "Notifications", link: "/admin/notifications", icon: <TfiBell /> },
                                { title: "Profile", link: "/admin/profile", icon: <TfiUser /> },
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
                    <Sidebar menu={sidebarMenu} />
                </div>
                <NotificationContent />
            </Main>
        </InnerAppContainer>
    )
};

export default Notifications;
