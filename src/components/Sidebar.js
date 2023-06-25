import ButtonPrimary, { IconButton } from "./Button";
import SidebarLink from "./SideBarLinks";
import { UilEstate } from "@iconscout/react-unicons";
import { UilBookReader } from "@iconscout/react-unicons";
import { UilDatabase } from "@iconscout/react-unicons";
import { UilFileQuestion } from "@iconscout/react-unicons";
import { UilAlignJustify } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";
import { useState } from "react";
import DarkModeToggler from "./DarkmodeToggler";

export default function Sidebar({ darkToggle, setDarkToggle }) {
    let [activate, setActivate] = useState(0);

    return (
        <div className="w-[20%] z-10 flex flex-col box-border h-screen left-0 top-0 border-2 dark:border-slate-700">
            <div className="flex p-5 justify-between items-center">
                <span className="font-bold"></span>
                <IconButton>
                    {" "}
                    <UilAlignJustify />{" "}
                </IconButton>
            </div>
            <div className="px-5">
                <span onClick={() => setActivate(0)}>
                    <SidebarLink to="/" activate={activate === 0}>
                        {" "}
                        <UilEstate /> Home
                    </SidebarLink>
                </span>

                <span onClick={() => setActivate(1)}>
                    <SidebarLink to="/user" activate={activate === 1}>
                        {" "}
                        <UilBookReader /> User
                    </SidebarLink>
                </span>
                <span onClick={() => setActivate(2)}>
                    <SidebarLink to="/data" activate={activate === 2}>
                        {" "}
                        <UilDatabase /> Data
                    </SidebarLink>
                </span>
                <span onClick={() => setActivate(3)}>
                    <SidebarLink to="/project" activate={activate === 3}>
                        <UilFileQuestion /> Project
                    </SidebarLink>
                </span>
            </div>
            <div className="p-5 flex justify-center gap-5 dark:text-slate-400 items-center">
                <p>Dark</p>
                <DarkModeToggler
                    darkToggle={darkToggle}
                    setDarkToggle={setDarkToggle}
                />
                <p>Light</p>
            </div>
            <div className="w-full h-max flex-grow"></div>
            <div className="p-5 flex flex-col">
                <ButtonPrimary>
                    <UilSignout /> Log Out
                </ButtonPrimary>
            </div>
        </div>
    );
}
