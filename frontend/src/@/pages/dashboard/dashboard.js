import Map from "@/components/common/map"
import { Card } from "@/components/ui/card"
import { UseFetch } from "@/hooks/useFetch"
import React, { useEffect } from "react"

export default function Dashboard() {
    const locations = [2.3522, 48.8566]
    const { loading, error, data, callApi } = UseFetch("get", "/getcordinates/paris", {})
    useEffect(() => {
        callApi()
    }, [])
    console.log(data, "data");
    return (
        <div className="p-2 h-full bg-primary dark:bg-primary-foreground">
            <Card>
                <Map locations={data && data?.data} />
            </Card>
        </div>
    )
}
