import '../../styles/InnerAppStyles.css'

/* Contexts, hooks, stores and utils */
import useThemeStore from '../../stores/useThemeStore.js';
import useTitleProvider from '../../utils/TitleProvider';
import { useMenu } from '../../utils/Menu';

/* Components */
import InnerAppContainer from '../../components/InnerAppContainer';
import Header from '../../partials/Header';
import HeaderContent from '../../components/admin/HeaderContent';
import Main from '../../partials/Main';
import Sidebar from '../../components/Sidebar';
import ThemeSettings from '../../components/ThemeSettings';
import ResponsiveSidebar, { ResponsiveMenuBar } from '../../components/ResponsiveSidebar';
import SalesmanContent from '../../components/admin/SalesmanContent';

const Salesman = () => {

    /* Destructuring of Contexts, hooks, stores and utils */
    const { theme } = useThemeStore();
    const { title } = useTitleProvider();
    const [ adminMenu ] = useMenu();

    /* Sidebar menu */
    const sidebarMenu = adminMenu.filter(menu => menu.isShown === true);

    /* Current document's title */
    document.title = title;

    return (
        <InnerAppContainer theme={theme}>
            <ThemeSettings />

            {/* Responsive sidebar toggle and sidebar */}
            <ResponsiveMenuBar />
            <ResponsiveSidebar menu={adminMenu}/>
            {/* Responsive sidebar toggle and sidebar */}

            <Header>
                <HeaderContent />
            </Header>
            <Main>
                <Sidebar menu={sidebarMenu} />
                <SalesmanContent />
            </Main>
        </InnerAppContainer>
    )
};

export default Salesman;
