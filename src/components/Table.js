export default function Table({ children }) {
    return (
        <div className="overflow-x-scroll w-full md:overflow-x-auto">
            <table className="w-full">{children}</table>
        </div>
    );
}
