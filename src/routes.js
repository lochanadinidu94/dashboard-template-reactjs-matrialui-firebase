import DashboardIcon from './assets/DashboardIcon.svg'
import DashboardIconActive from './assets/DashboardIconActive.svg'
import AccountsIcon from './assets/AccountsIcon.svg'
import AccountsIconActive from './assets/AccountsIconActive.svg'
import TransactionsIcon from "./assets/TransactionsIcon.svg";
import TransactionsIconActive from "./assets/TransactionsIconActive.svg";
import SecureIcon from "./assets/SecureIcon.svg";
import SecureIconActive from "./assets/SecureIconActive.svg";
import SettingsIcon from "./assets/SettingsIcon.svg";
import SettingsIconActive from "./assets/SettingsIconActive.svg";
import SignOutIcon from "./assets/SignOutIcon.svg";

// Components
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import Secure from './pages/Secure';
import Settings from './pages/Settings';
import Account from './pages/Account';

export const routes = [

    {
        label: 'Dashboard', 
        icon: DashboardIcon, 
        activeIcon: DashboardIconActive, 
        path: "/",
        component: Dashboard,
    },
    {
        label:'Accounts', 
        icon:AccountsIcon, 
        activeIcon:AccountsIconActive, 
        path:"/accounts",
        component: Account,
    },
    {
        label: "Transactions",
        path: "/transactions",
        icon: TransactionsIcon,
        activeIcon: TransactionsIconActive,
        component: Transaction,
    },
    {
        label: "Secure",
        path: "/secure",
        icon: SecureIcon,
        activeIcon: SecureIconActive,
        component: Secure,
    },
    {
      label: "Settings",
      path: "/settings",
      icon: SettingsIcon,
      activeIcon: SettingsIconActive,
      component: Settings,
    },
    {
        label: "Sign Out",
        path: "/sign-out",
        icon: SignOutIcon,
        activeIcon: SignOutIcon,
      },

];