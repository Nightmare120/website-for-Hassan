import { Link } from "react-router-dom";

export default function SidebarLink(props) {
    return (
        <Link to={props.to}>
            <div
                className={`flex items-center  px-4 py-2 my-2 gap-4
            ${props.activate ? "bg-blue-500" : "bg-transparent"} 
            ${props.activate ? "border-blue-500" : "border-transparent"} 
            ${
                props.activate
                    ? "text-black dark:text-white"
                    : "text-black dark:text-slate-500"
            } 
            hover:bg-blue-500 dark:hover:text-white hover:text-white border-2 bg-opacity-50 cursor-pointer  rounded-md    `}
            >
                {props.children}
            </div>
        </Link>
    );
}
