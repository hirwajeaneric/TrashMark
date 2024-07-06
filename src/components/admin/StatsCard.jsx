import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const StatsCard = ({stat, reportPeriod}) => {
    return (
        <Link to={stat.address || ''} className={`flex flex-col items-start gap-2 justify-center w-full md:w-${stat.size} p-6 rounded-lg border border-gray-300`} >
            <h1 className="font-bold">{stat.title}</h1>
            <h2 className="text-5xl font-bold">{stat.value}</h2>
            <p className="text-slate-400">In this {reportPeriod.type}</p>
        </Link>
    )
}

export default StatsCard