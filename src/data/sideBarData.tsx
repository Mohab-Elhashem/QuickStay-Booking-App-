import { assets } from "../assets/assets";

interface sideBarDataProps{
    name: string ;
    path: string ;
    icon: string;
}

export const SideBar:sideBarDataProps[] = [
    {name: "Dashboard" , path: "/owner" , icon: assets.dashboardIcon},
    {name: "Add Room" , path: "/owner/add-room" , icon: assets.addIcon},
    {name: "List Room" , path: "/owner/list-room" , icon: assets.listIcon},
]