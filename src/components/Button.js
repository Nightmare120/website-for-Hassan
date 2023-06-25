export default function ButtonPrimary(props) {
    return (
        <button className="bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-700 transition-all rounded-3xl border-2 border-blue-500 px-4 py-2">
            {props.children}
        </button>
    );
}

export function ButtonSecondary(props) {
    return (
        <button className="bg-gray-500 text-white flex items-center gap-2 hover:bg-gray-700  transition-all rounded-3xl border-2 border-gray-500 px-4 py-2">
            {props.children}
        </button>
    );
}

export function ButtonRed(props) {
    return (
        <button className="bg-red-500 text-white flex items-center gap-2 hover:bg-red-700  transition-all rounded-3xl border-2 border-red-500 px-4 py-2">
            {props.children}
        </button>
    );
}

export function IconButton(props) {
    return (
        <button className="bg-slate-400 rounded-full text-white hover:bg-blue-700 transition-all border-2 border-slate-400 px-4 py-2 flex justify-center items-center">
            {props.children}
        </button>
    );
}
