import Map from "@/components/common/map";
import { Card } from "@/components/ui/card";

export default function Shipment() {
    const locations = [2.3522, 48.8566]

    return <div className="p-2 h-full bg-primary dark:bg-primary-foreground">
        <Card><Map locations={locations} /> </Card>
    </div>
}