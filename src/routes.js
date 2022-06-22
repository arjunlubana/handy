// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import Profile from "views/Dashboard/Profile";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Find Work",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Payment",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  // {
  // name: "ACCOUNT PAGES",
  // category: "account",
  // state: "pageCollapse",
  // views:
  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
  },
  // {
  //   path: "/signin",
  //   name: "Sign In",
  //   icon: <DocumentIcon color="inherit" />,
  //   component: SignIn,
  //   layout: "/auth",
  // },
  // {
  //   path: "/signup",
  //   name: "Sign Up",
  //   icon: <RocketIcon color="inherit" />,
  //   secondaryNavbar: true,
  //   component: SignUp,
  //   layout: "/auth",
  // },
  // ],
  // },
];
export default dashRoutes;
