import { ButtonRed, ButtonSecondary } from "../components/Button";
import DataColumn from "../components/DataPage/DataColumn";
import { UilTrash } from "@iconscout/react-unicons";
import { UilDatabase } from "@iconscout/react-unicons";
import { UilFileBlank } from "@iconscout/react-unicons";
import Table from "../components/Table";

export default function ProjectDetailPage() {
    return (
        <div className="ml-auto mt-3 p-5   ">
            <div className="bg-gray-800 p-5 py-10 rounded-md">
                <h1 className="text-4xl  text-slate-200 font-bold  rounded-md ">
                    Collecting Data For Football
                </h1>
                <p className="w-full text-slate-400 lg:w-4/6 my-8 leading-7">
                    Here we are take data from user releated to football, you
                    can click below buttons to see what questions we are asking
                    to our users
                </p>

                <div className="flex gap-4 flex-wrap">
                    <ButtonSecondary>
                        <UilFileBlank /> Questions
                    </ButtonSecondary>
                    <ButtonSecondary>
                        <UilDatabase /> Database
                    </ButtonSecondary>
                    <ButtonRed>
                        {" "}
                        <UilTrash />{" "}
                    </ButtonRed>
                </div>
            </div>
            <h3 className="mt-16 dark:text-slate-400 mb-4 font-bold text-2xl">
                Data Collected from last 5 Sessions
            </h3>
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
