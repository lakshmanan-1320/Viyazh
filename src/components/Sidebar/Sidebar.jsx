import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { NavLink } from "react-router-dom";

import DrawerHeaderLogo from "../../assets/img/logo_full.svg";
import minilogo from "../../assets/img/logo.svg";

// icons
import { GoGraph } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsFileBarGraph } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";






import "./Sidebar.css";

const drawerWidth = 240;

const openedMixin = {
  width: drawerWidth,
  overflowX: "hidden",
};

const closedMixin = {
  width: `80px`,
  overflowX: "hidden",
};

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "25px 10px",
  
}));

const Drawer = styled(MuiDrawer)(({ open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  ...(open ? openedMixin : closedMixin),
  "& .MuiDrawer-paper": {
    ...(open ? openedMixin : closedMixin),
    overflowY: "hidden",   // ✅ hide y-scroll
    overflowX: "hidden",
  },
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const menuItems = [
    { text: "Dashboard", icon: <MdOutlineDashboard />, path: "/admin/dashboard" },
    { text: "Tests", icon: <LuClipboardList />, path: "/admin/test" },
    { text: "Candidates", icon: <IoIosPeople />, path: "/candidates" },
    { text: "Analytics", icon: <TbDeviceDesktopAnalytics />, path: "/analytics" },
    { text: "Settings", icon: <IoIosSettings />, path: "/settings" },
    {text:"My Account",icon:<FaRegCircleUser />,path:"/myAccount"},
    {text:"Library",icon:<GoGraph />,path:"/contentCreator/library"},
    {text:"Question Bank ",icon:<BiBookAlt />,path:"/contentCreator/questionBank"},
    {text:"Difficulty Level",icon:<BsFileBarGraph />,path:"/contentCreator/difficultyLevel"},
    {text:"Users",icon:<FaRegUser />,path:"/admin/users"},
    {text:"Company",icon:<FaBuilding />,path:"/admin/Company"},
    
    
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open ? (
          <img src={DrawerHeaderLogo} className="sidebar-logo" alt="logo" />
        ) : (
          <img src={minilogo} className="sidebar-mini-logo" alt="logo-mini" />
        )}

        <IconButton onClick={() => setOpen(!open)}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List className="sidebar-menu">
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <NavLink
              to={path}
              className={({ isActive }) =>
                open
                  ? `menu-item ${isActive ? "active" : ""}`
                  : `menu-item collapsed ${isActive ? "active-collapsed" : ""}`
              }
            >
              <ListItemButton sx={{ justifyContent: open ? "initial" : "center" }}>
                <ListItemIcon className="menu-icon">{icon}</ListItemIcon>
                <ListItemText
                  primary={text}
                  className="menu-text"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Drawer>
  );
};

export default Sidebar;
