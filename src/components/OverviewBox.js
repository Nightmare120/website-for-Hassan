export default function OverviewBox({ data, summary, icon }) {
    return (
        <div className="w-full md:w-[47%] lg:w-[30%] dark:border-blue-800 rounded-md dark:bg-blue-500 dark:bg-opacity-25  bg-blue-500 bg-opacity-10  box-border flex-col p-4 text-center flex justify-center items-center gap-4 border-2">
            <span className="text-black dark:text-slate-300">{icon}</span>

            <h3 className="font-bold dark:text-slate-300">{data}</h3>
            <p className="leading-7 text-slate-600 dark:text-slate-400">
                {summary}
            </p>
        </div>
    );
}
