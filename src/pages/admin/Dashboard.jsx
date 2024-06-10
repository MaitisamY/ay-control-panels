import '../../styles/InnerAppStyles.css'

/* Contexts, hooks, stores and utils */
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
import { TfiAlignJustify, TfiBell, TfiUser, TfiSettings } from 'react-icons/tfi';
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
import DashboardContent from '../../components/admin/DashboardContent';

const AdminDashboard = () => {

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
                                { title: "Dashboard", link: "/admin/dashboard", icon: <BsSpeedometer2 />, childMenu: true },
                                { title: "Orders", link: "/admin/orders", icon: <BsBox />, childMenu: false },
                                { title: "Quotes", link: "/admin/quotes", icon: <BsChatRightQuote />, childMenu: false },
                                { title: "Vectors", link: "/admin/vectors", icon: <BsVectorPen />, childMenu: false },
                                { title: "Salesmen", link: "/admin/salesmen", icon: <GoPeople />, childMenu: false },
                                { title: "Clients", link: "/admin/clients", icon: <BsPeople />, childMenu: false },
                                { title: "Invoices", link: "/admin/invoices", icon: <GoLog />, childMenu: false },
                                { title: "Notifications", link: "/admin/notifications", icon: <TfiBell />, childMenu: false },
                                { title: "Profile", link: "/admin/profile", icon: <TfiUser />, childMenu: false },
                                { title: "Settings", onHandleClick: () => toggleThemeContainer(), icon: <TfiSettings />, childMenu: false },
                                { title: "Logout", onHandleClick: () => logout(), icon: <GoSignOut />, childMenu: false },
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
                <DashboardContent status={isStatusReloading} />
            </Main>
        </InnerAppContainer>
    )
};

export default AdminDashboard;
