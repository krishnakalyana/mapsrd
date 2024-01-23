import { Annotation, ComposableMap, Geographies, Geography, Line, Marker, } from "react-simple-maps"
import "../../../index.css"
const coos =[
    [ 40.7128,-74.0060 ], // New York City, USA
    [ 34.0522,-118.2437], // Los Angeles, USA
    // [ 41.8781,-87.6298 ], // Chicago, USA
    // [ 39.9042,116.4074 ], // Beijing, China
    // [ 31.2304,121.4737 ], // Shanghai, China
    // [ 23.1291,113.2644 ], // Guangzhou, China
  ];
  const ran = [
    [35.8617,104.1954],
    [-103, 25]
  ]
  
export default function Map ({locations}){
    return   <ComposableMap width={800} height={300} projectionConfig={{
        // rotate: [-10.0, -53.0, 0],
        center: [1, 10],
        scale: 100,
    }}>
        <Geographies geography="/features.json">
            {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography  key={geo.rsmKey} geography={geo} style={{
                        default: {
                          fill: "var(--destructive)",
                        },
                        hover: {
                          fill: "var(--destructive)",
                        },
                        pressed: {
                          fill: "#E42",
                        },
                      }} />
                ))
            }
        </Geographies>
        <Annotation
            subject={locations ? locations:  [35.8617,104.1954]}
            dx={-20}
            dy={-1}
            connectorProps={{
                stroke: "#FF5533",
                strokeWidth: 1,
                strokeLinecap: "round"
            }}
        >
            <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                {"Paris"}
            </text>
        </Annotation>
        <Marker coordinates={[-103, 25]} fill="#777">
            <text textAnchor="middle" fill="#F53">
                Mexico
            </text>
        </Marker>
        
        <Line
        // from={[2.3522, 48.8566]}
        // to={[-74.006, 40.7128]}
        coordinates={ran}
        stroke="#FF5533"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </ComposableMap>
}