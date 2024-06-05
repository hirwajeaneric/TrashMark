import { useEffect, useState } from "react";

const OverviewCards = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        setStats([
            {
                title: "Total Trash Recorded",
                value: 123452,
                comparison: "+20%"
            },
            {
                title: "Total Trash Exchanged/Sold",
                value: 123456,
                comparison: "+60%"
            },
            {
                title: "Total Renuable Trash",
                value: 123456,
                comparison: "+20%"
            }
        ]);
    }, []);

    return (
        <div className="flex flex-1 w-full gap-3 flex-wrap justify-between">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start gap-4 justify-center w-full md:w-[32%] p-6 rounded-lg border border-gray-300">
                    <h1 className="font-bold">{stat.title}</h1>
                    <h2 className="text-5xl font-bold">{stat.value}</h2>
                    <p className="text-slate-400">{stat.comparison} over last month</p>
                </div>
            ))}
        </div>
    )
}

export default OverviewCards