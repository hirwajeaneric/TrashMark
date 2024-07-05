import { Outlet } from "react-router-dom";
import StatsCard from "./StatsCard"

/* eslint-disable react/prop-types */
const ProvinceStats = ({ reportPeriod }) => {
    const stats = [
        {
            size: "fit",
            address: "/admin/overview/kigali",
            title: "Kigali City",
            value: 12340,
        },
        {
            size: "fit",
            address: "/admin/overview/north",
            title: "Northern Province",
            value: 12341,
        },
        {
            size: "fit",
            address: "/admin/overview/south",
            title: "Southern Province",
            value: 12342,
        },
        {
            size: "fit",
            address: "/admin/overview/west",
            title: "Western Province",
            value: 12343,
        },
        {
            size: "fit",
            address: "/admin/overview/east",
            title: "Eastern Province",
            value: 12344,
        },
    ];

    return (
        <div className="flex flex-col w-full gap-3 mt-2">
            <h1 className="font-bold">Province-wise Stats</h1>
            <div className="flex w-full gap-3">
                <div className="flex flex-col gap-3">
                    <StatsCard stat={stats[0]} reportPeriod={reportPeriod} />
                    <StatsCard stat={stats[1]} reportPeriod={reportPeriod} />
                    <StatsCard stat={stats[2]} reportPeriod={reportPeriod} />
                    <StatsCard stat={stats[3]} reportPeriod={reportPeriod} />
                    <StatsCard stat={stats[4]} reportPeriod={reportPeriod} />
                </div>
                <div className="flex flex-col gap-3 w-full items-start">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ProvinceStats