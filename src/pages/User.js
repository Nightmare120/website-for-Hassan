import Table from "../components/Table";
import TableColumn from "../components/User/TableColumn";

export default function UserPage() {
    return (
        <div className="ml-auto mt-3 p-5  ">
            <h1 className="text-4xl text-black dark:text-slate-200  rounded-md ">
                User
            </h1>
            <p className="w-full text-slate-700 dark:text-slate-400 lg:w-4/6 my-8 leading-7">
                Here's list of all user added by you and Using this view you can
                create a new user, delete user or modify details of existing
                users.
            </p>
            <Table className="w-full border-collapse">
                <tbody>
                    <tr className="bg-blue-500 dark:bg-opacity-25 dark:text-slate-200">
                        <td className="border-2 dark:border-blue-800 py-2 px-3">
                            S No.
                        </td>
                        <td className="border-2 dark:border-blue-800 py-2 px-3">
                            Name
                        </td>
                        <td className="border-2 dark:border-blue-800 py-2 px-3">
                            Email
                        </td>
                        <td className="border-2 dark:border-blue-800 py-2 px-3">
                            passowrd
                        </td>
                    </tr>
                    <TableColumn
                        serialno={1}
                        name={"Manmohit Taiya"}
                        email={"manm@gmail.com"}
                        password={"123466"}
                    />
                    <TableColumn
                        serialno={2}
                        name={"Manmohit Taiya"}
                        email={"manm@gmail.com"}
                        password={"123466"}
                    />
                    <TableColumn
                        serialno={3}
                        name={"Manmohit Taiya"}
                        email={"manm@gmail.com"}
                        password={"123466"}
                    />
                    <TableColumn
                        serialno={4}
                        name={"Manmohit Taiya"}
                        email={"manm@gmail.com"}
                        password={"123466"}
                    />
                    <TableColumn
                        serialno={5}
                        name={"Manmohit Taiya"}
                        email={"manm@gmail.com"}
                        password={"123466"}
                    />
                </tbody>
            </Table>
        </div>
    );
}
