import { Link } from "react-router-dom";
import ButtonPrimary, { ButtonSecondary } from "../Button";
import { UilShareAlt } from "@iconscout/react-unicons";

export default function ProjectBox() {
    return (
        <div className="w-full  md:w-[45%] lg:w-[30%] border-[2px] dark:border-slate-700 border-slate-200 overflow-hidden flex flex-col  gap-2 rounded-md">
            <h3 className="text-xl text-black dark:text-slate-200 p-5 dark:border-slate-700 border-b-2 font-bold ">
                Collectng Data for football
            </h3>
            <div className="p-5 dark:text-slate-400 rounded-t-lg ">
                <p>Sessions: 146 </p>
                <p>Answer Collected: 56 </p>
                <p>Status: Running </p>
                <div className="flex gap-4 justify-between mt-4">
                    <Link to={"/project/detail"}>
                        <ButtonPrimary>View More</ButtonPrimary>
                    </Link>
                    <ButtonSecondary>
                        <UilShareAlt />
                    </ButtonSecondary>
                </div>
            </div>
        </div>
    );
}
