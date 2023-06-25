import OverviewBox from "../components/OverviewBox";
import { UilQuestionCircle } from "@iconscout/react-unicons";
import { UilCommentAltChartLines } from "@iconscout/react-unicons";
import { UilWifi } from "@iconscout/react-unicons";

export default function Dashboard() {
    return (
        <div className="ml-auto mt-3 p-5  ">
            <div className="bg-gray-800 p-5 rounded-md">
                <h1 className="text-4xl text-slate-200  rounded-md ">
                    Welcome,
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                        {" "}
                        Hassan
                    </span>
                </h1>
                <p className="w-full text-slate-400 lg:w-4/6 my-8 leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet similique iusto distinctio dolorum nemo iste non
                    maiores culpa, sequi eaque.
                </p>
            </div>
            <div className="flex mt-8 flex-wrap gap-6 justify-between items-center">
                <OverviewBox
                    icon={<UilQuestionCircle size="50" />}
                    data={"Total 300+ questions"}
                    summary={
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, asperiores."
                    }
                />
                <OverviewBox
                    icon={<UilQuestionCircle size="50" />}
                    data={"Total 300+ questions"}
                    summary={
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, asperiores."
                    }
                />
                <OverviewBox
                    icon={<UilQuestionCircle size="50" />}
                    data={"Total 300+ questions"}
                    summary={
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, asperiores."
                    }
                />
                <OverviewBox
                    icon={<UilQuestionCircle size="50" />}
                    data={"Total 300+ questions"}
                    summary={
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, asperiores."
                    }
                />

                <OverviewBox
                    icon={<UilCommentAltChartLines size="50" />}
                    data={"Total 300+ Answer"}
                    summary={
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, asperiores."
                    }
                />
                <OverviewBox
                    icon={<UilWifi size="50" />}
                    data={"4 user"}
                    summary={
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo, asperiores."
                    }
                />
            </div>
        </div>
    );
}
