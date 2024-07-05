import StatsCard from "./StatsCard"

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

export default OverviewCards