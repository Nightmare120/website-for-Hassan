export default function TableColumn({ serialno, name, email, password }) {
    return (
        <tr
            className={`p-4 dark:text-slate-400  ${
                serialno % 2 === 0
                    ? "bg-slate-300 dark:bg-slate-800"
                    : "bg-transparent"
            }`}
        >
            <td className="border-2 dark:border-slate-700 py-2 px-3">
                {serialno}
            </td>
            <td className="border-2 dark:border-slate-700 py-2 px-3">{name}</td>
            <td className="border-2 dark:border-slate-700 py-2 px-3">
                {email}
            </td>
            <td className="border-2 dark:border-slate-700 py-2 px-3">
                {password}
            </td>
        </tr>
    );
}
