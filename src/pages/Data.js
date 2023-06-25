import ButtonPrimary, { ButtonSecondary } from "../components/Button";
import DataColumn from "../components/DataPage/DataColumn";
import Table from "../components/Table";

export default function DataPage() {
    return (
        <div className="ml-auto mt-3 dark:text-slate-400 p-5  ">
            <h3 className=" mb-4 dark:text-slate-200 font-bold text-2xl">
                Data Collected from last 5 Sessions
            </h3>
            <p className="leading-7 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                ipsa ex aspernatur magni consequatur quaerat iste distinctio
                aperiam aliquam placeat?
            </p>
            <Table className="w-full">
                <tbody>
                    <DataColumn
                        serialno={"1"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                    <DataColumn
                        serialno={"2"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                    <DataColumn
                        serialno={"3"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                    <DataColumn
                        serialno={"4"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                    <DataColumn
                        serialno={"5"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                </tbody>
            </Table>
            <div className="bg-gray-800 p-5 py-10 rounded-md my-16 flex gap-4 justify-start items-start flex-col ">
                <h3 className="font-bold text-slate-200 text-2xl">
                    Football Project{" "}
                </h3>
                <p className="leading-7 text-slate-400 w-full md:w-[80%]">
                    You can view complete data collected from the button below,
                    or you can see last 5 sessions data from below table and you
                    can also view the project details from below
                </p>
                <div className="flex gap-4 mt-4">
                    <ButtonPrimary>View Project</ButtonPrimary>
                    <ButtonSecondary>View All Data</ButtonSecondary>
                </div>
            </div>
            <Table className="w-full">
                <tbody>
                    <DataColumn
                        serialno={"1"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                    <DataColumn
                        serialno={"2"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                    <DataColumn
                        serialno={"3"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                    <DataColumn
                        serialno={"4"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                    <DataColumn
                        serialno={"5"}
                        date={"25th June"}
                        conversation={"My favourite player is ronaldo"}
                        name={"Manmohit"}
                    />
                </tbody>
            </Table>
        </div>
    );
}
