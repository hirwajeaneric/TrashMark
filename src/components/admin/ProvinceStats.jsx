import { Outlet } from "react-router-dom";
import StatsCard from "./StatsCard"
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const ProvinceStats = ({ reportPeriod, productsPerProvince }) => {
    const [stats, setStats] = useState([
        {
            size: "fit",
            address: "/admin/overview/kigali",
            title: "Kigali City",
            value: 0,
        },
        {
            size: "fit",
            address: "/admin/overview/north",
            title: "Northern Province",
            value: 0,
        },
        {
            size: "fit",
            address: "/admin/overview/south",
            title: "Southern Province",
            value: 0,
        },
        {
            size: "fit",
            address: "/admin/overview/west",
            title: "Western Province",
            value: 0,
        },
        {
            size: "fit",
            address: "/admin/overview/east",
            title: "Eastern Province",
            value: 0,
        },
    ]);

    useEffect(() => {
        setStats([
            {
                size: "full",
                address: "/admin/overview/kigali",
                title: "Kigali City",
                value: productsPerProvince.kigali,
            },
            {
                size: "full",
                address: "/admin/overview/north",
                title: "Northern Province",
                value: productsPerProvince.north,
            },
            {
                size: "full",
                address: "/admin/overview/south",
                title: "Southern Province",
                value: productsPerProvince.south,
            },
            {
                size: "full",
                address: "/admin/overview/west",
                title: "Western Province",
                value: productsPerProvince.west,
            },
            {
                size: "full",
                address: "/admin/overview/east",
                title: "Eastern Province",
                value: productsPerProvince.east,
            },
        ])
    }, [productsPerProvince.east, productsPerProvince.kigali, productsPerProvince.north, productsPerProvince.south, productsPerProvince.west])

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