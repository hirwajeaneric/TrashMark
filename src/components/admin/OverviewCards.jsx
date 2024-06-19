/* eslint-disable react/prop-types */
const OverviewCards = ({reportPeriod, stats}) => {
    return (
        <div className="flex flex-1 w-full gap-3 flex-wrap justify-between">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start gap-2 justify-center w-full md:w-[24%] p-6 rounded-lg border border-gray-300">
                    <h1 className="font-bold">{stat.title}</h1>
                    <h2 className="text-5xl font-bold">{stat.value}</h2>
                    <p className="text-slate-400">In this {reportPeriod}</p>
                </div>
            ))}
        </div>
    )
}

export default OverviewCards