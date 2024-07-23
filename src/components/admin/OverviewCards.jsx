import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const OverviewCards = ({reportPeriod, stats}) => {
    return (
        <div className="flex flex-1 w-full gap-3 flex-wrap justify-between">
            {stats.map((stat, index) => (
                <StatsCard key={index} stat={stat} reportPeriod={reportPeriod} />
            ))}
        </div>
    )
}

export default OverviewCards;

const StatsCard = ({stat, reportPeriod}) => {
    const [period, setPeriod] = useState(undefined);
    useEffect(() => {
        if (reportPeriod.type === 'Year') {
            setPeriod(reportPeriod.value)
        } else if (reportPeriod.type === 'Month') {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            setPeriod(`${months[reportPeriod.value - 1]}`)
        } 
    }, [reportPeriod.type, reportPeriod.value])

    return (
        <Link to={stat.address || ''} className={`flex flex-col items-start gap-2 justify-center w-full md:w-[24%] p-6 rounded-lg border border-gray-300`} >
            <h1 className="font-bold">{stat.title}</h1>
            <h2 className="text-5xl font-bold">{stat.value}</h2>
            {(reportPeriod.type === 'Year' && reportPeriod.value === new Date().getFullYear()) 
                ? <p className="text-slate-400">In this {reportPeriod.type}</p>
                : <p className="text-slate-400">In {period}</p>
            }
        </Link>
    )
}