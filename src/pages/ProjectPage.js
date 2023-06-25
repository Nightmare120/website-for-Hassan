import Input from "../components/Input";
import ProjectBox from "../components/ProjectPage/ProjectBox";

export default function ProjectPage() {
    return (
        <div className="ml-auto  mt-3 p-5  ">
            <div className="bg-gray-800 p-5 py-10 rounded-md">
                <h1 className="text-4xl font-bold text-slate-200  rounded-md ">
                    Your Projects
                </h1>
                <p className="w-full text-slate-400 lg:w-4/6 my-8 leading-7">
                    Here's list of all user added by you and Using this view you
                    can create a new user, delete user or modify details of
                    existing users.
                </p>
                <Input />
            </div>
            <div className="flex flex-wrap gap-10 mt-4">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </div>
        </div>
    );
}
