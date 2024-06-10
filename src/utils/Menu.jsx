import { useAuth } from '../context/AuthContext.jsx';
import useThemeContainerStore from '../stores/useThemeContainerStore.js';
import { BsSpeedometer2, BsBox, BsChatRightQuote, BsVectorPen, BsPeople } from 'react-icons/bs';
import { GoPeople, GoLog, GoSignOut } from 'react-icons/go';
import { TfiBell, TfiUser, TfiSettings, TfiEmail } from 'react-icons/tfi';
import { BsTools } from 'react-icons/bs';


export const useMenu = () => {
    const { logout } = useAuth();
    const { toggleThemeContainer } = useThemeContainerStore();

    const adminMenu = [
        {
            isShown: true,
            title: "Dashboard",
            link: "/admin/dashboard",
            icon: < BsSpeedometer2 />,
            hasChildMenu: false
        },
        {
            isShown: true,
            title: "Orders",
            link: "",
            icon: < BsBox />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Orders",
                    title: "Place order",
                    link: "/admin/place-order",
                },
                {
                    parent: "Orders",
                    title: "Order history",
                    link: "/admin/orders",
                },
            ],
        },
        {
            isShown: true,
            title: "Quotes",
            link: "",
            icon: < BsChatRightQuote />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Quotes",
                    title: "Place quote",
                    link: "/admin/place-quote",
                },
                {
                    parent: "Quotes",
                    title: "Quote history",
                    link: "/admin/quotes",
                },
            ],
        },
        {
            isShown: true,
            title: "Vectors",
            link: "",
            icon: < BsVectorPen />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Vectors",
                    title: "Place vector",
                    link: "/admin/place-vector",
                },
                {
                    parent: "Vectors",
                    title: "Vector history",
                    link: "/admin/vectors",
                },
            ],
        },
        {
            isShown: true,
            title: "Salesmen",
            link: "",
            icon: < GoPeople />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Salesmen",
                    title: "Add salesman",
                    link: "/admin/add-salesman",
                },
                {
                    parent: "Salesmen",
                    title: "Salesmen data",
                    link: "/admin/salesmen",
                },
            ],
        },
        {
            isShown: true,
            title: "Clients",
            link: "",
            icon: < BsPeople />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Clients",
                    title: "Add client",
                    link: "/admin/add-client",
                },
                {
                    parent: "Clients",
                    title: "Client data",
                    link: "/admin/clients",
                },
            ],
        },
        {
            isShown: true,
            title: "Invoices",
            link: "/admin/invoices",
            icon: < GoLog />,
            hasChildMenu: false
        },
        {
            isShown: true,
            title: "Management",
            link: "",
            icon: < BsTools />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Management",
                    title: "Add format",
                    link: "/admin/add-format",
                },
                {
                    parent: "Management",
                    title: "Format data",
                    link: "/admin/formats",
                },
                {
                    parent: "Management",
                    title: "Add fabric",
                    link: "/admin/add-fabric",
                },
                {
                    parent: "Management",
                    title: "Fabric data",
                    link: "/admin/fabrics",
                },
                {
                    parent: "Management",
                    title: "Add placement",
                    link: "/admin/add-placement",
                },
                {
                    parent: "Management",
                    title: "Placement data",
                    link: "/admin/placements",
                },
            ],
        },
        { 
            isShown: false, 
            title: "Notifications", 
            link: "/admin/notifications", 
            icon: <TfiBell />, 
            hasChildMenu: false 
        },
        { 
            isShown: false, 
            title: "Profile", 
            link: "/admin/profile", 
            icon: <TfiUser />, 
            hasChildMenu: false 
        },
        {
            isShown: false,
            title: "Settings",
            onHandleClick: () => toggleThemeContainer(),
            icon: < TfiSettings />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Logout",
            onHandleClick: () => logout(),
            icon: < GoSignOut />,
            hasChildMenu: false
        },
    ]

    const clientMenu = [
        {
            isShown: true,
            title: "Dashboard",
            link: "/client/dashboard",
            icon: < BsSpeedometer2 />
        },
        {
            isShown: true,
            title: "Orders",
            link: "/client/orders",
            icon: < BsBox />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Orders",
                    title: "Place order",
                    link: "/client/place-order",
                },
                {
                    parent: "Orders",
                    title: "Order history",
                    link: "/client/orders",
                },
            ],
        },
        {
            isShown: true,
            title: "Quotes",
            link: "/client/quotes",
            icon: < BsChatRightQuote />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Quotes",
                    title: "Place quote",
                    link: "/client/place-quote",
                },
                {
                    parent: "Quotes",
                    title: "Quote history",
                    link: "/client/quotes",
                },
            ],
        },
        {
            isShown: true,
            title: "Vectors",
            link: "/client/vectors",
            icon: < BsVectorPen />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Vectors",
                    title: "Place vector",
                    link: "/client/place-vector",
                },
                {
                    parent: "Vectors",
                    title: "Vector history",
                    link: "/client/vectors",
                },
            ],
        },
        {
            isShown: true,
            title: "Invoices",
            link: "/client/invoices",
            icon: < GoLog />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Notifications",
            link: "/client/notifications",
            icon: < TfiBell />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Inbox",
            link: "/client/inbox",
            icon: < TfiEmail />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Profile",
            link: "/client/profile",
            icon: < TfiUser />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Settings",
            onHandleClick: () => toggleThemeContainer(),
            icon: < TfiSettings />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Logout",
            onHandleClick: () => logout(),
            icon: < GoSignOut />,
            hasChildMenu: false
        },
    ]

    const salesmanMenu = [
        {
            isShown: true,
            title: "Dashboard",
            link: "/salesman/dashboard",
            icon: < BsSpeedometer2 />,
            hasChildMenu: false
        },
        {
            isShown: true,
            title: "Orders",
            link: "/salesman/orders",
            icon: < BsBox />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Orders",
                    title: "Place order",
                    link: "/salesman/place-order",
                },
                {
                    parent: "Orders",
                    title: "Order history",
                    link: "/salesman/orders",
                },
            ],
        },
        {
            isShown: true,
            title: "Quotes",
            link: "/salesman/quotes",
            icon: < BsChatRightQuote />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Quotes",
                    title: "Place quote",
                    link: "/salesman/place-quote",
                },
                {
                    parent: "Quotes",
                    title: "Quote history",
                    link: "/salesman/quotes",
                },
            ],
        },
        {
            isShown: true,
            title: "Vectors",
            link: "/salesman/vectors",
            icon: < BsVectorPen />,
            hasChildMenu: true,
            childMenu: [
                {
                    parent: "Vectors",
                    title: "Place vector",
                    link: "/salesman/place-vector",
                },
                {
                    parent: "Vectors",
                    title: "Vector history",
                    link: "/salesman/vectors",
                },
            ],
        },
        {
            isShown: true,
            title: "Clients",
            link: "/salesman/clients",
            icon: < BsPeople />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Notifications",
            link: "/salesman/notifications",
            icon: < TfiBell />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Profile",
            link: "/salesman/profile",
            icon: < TfiUser />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Settings",
            onHandleClick: () => toggleThemeContainer(),
            icon: < TfiSettings />,
            hasChildMenu: false
        },
        {
            isShown: false,
            title: "Logout",
            onHandleClick: () => logout(),
            icon: < GoSignOut />,
            hasChildMenu: false
        },
    ]

    return [adminMenu, clientMenu, salesmanMenu]; 
}