import { useEffect, useState } from "react"
import Page from "../Page"

const COLORS = {
    red: {
        low: 'from-red-100 to-orange-100',
        medium: 'from-red-500',
        high: 'bg-red-900',
    },
    orange: {
        low: 'from-orange-100 to-yellow-100',
        medium: 'from-orange-500',
        high: 'bg-orange-900',
    },
    yellow: {
        low: 'from-yellow-100 to-blue-100',
        medium: 'from-yellow-500',
        high: 'bg-yellow-900',
    },
    blue: {
        low: 'from-blue-100 to-green-100',
        medium: 'from-blue-500',
        high: 'bg-blue-900',
    },
    green: {
        low: 'from-green-100 to-cyan-100',
        medium: 'from-green-500',
        high: 'bg-green-900',
    },
    cyan: {
        low: 'from-cyan-100 to-purple-100',
        medium: 'from-cyan-500',
        high: 'bg-cyan-900',
    },
    purple: {
        low: 'from-purple-100 to-red-100',
        medium: 'from-purple-500',
        high: 'bg-purple-900',
    },
}

const Light = (props) => {
    var style = COLORS[props.color][props.intensity] + ' ' + props.size + ' rounded-full inline-block bg-gradient-to-r shadow-lg'

    return (
        <div className={style}></div>
    )
}

var lights = [
    <Light key='red' color='red' intensity='low' size='w-28 h-28' />,
    <Light key='orange' color='orange' intensity='low' size='w-28 h-28' />,
    <Light key='yellow' color='yellow' intensity='low' size='w-28 h-28' />,
    <Light key='blue' color='blue' intensity='low' size='w-28 h-28' />,
    <Light key='green' color='green' intensity='low' size='w-28 h-28' />,
    <Light key='cyan' color='cyan' intensity='low' size='w-28 h-28' />,
    <Light key='purple' color='purple' intensity='low' size='w-28 h-28' />,
]

let i = 0
const ChristmasLightsApp = () => {
    const [delay, setDelay] = useState(100)
    const [lightComps, setLightComps] = useState(lights)

    useEffect(() => {
        const interval = setInterval(() => {
            var newLights = []

            for (var j = 0; j < lightComps.length; j++) {
                if (i != j)
                    newLights[j] = <Light key={j} color={lightComps[j].props.color} intensity={lightComps[j].props.intensity} size={lightComps[j].props.size} />
                else
                    newLights[j] = <Light key={j} color={lightComps[j].props.color} intensity={lightComps[j].props.intensity == 'low' ? 'medium' : 'low'} size={lightComps[j].props.size} />
            }

            setLightComps(newLights)
            i = (i + 1 >= lightComps.length ? 0 : i + 1)
        }, delay);

        return () => clearInterval(interval);
    }, [delay]);

    return (
        <Page>
            <div>
                <div className="grid grid-cols-7">
                    {lightComps}
                </div>
                <div className="mt-14 flex justify-end from-red-400">
                    <label className="text-gray-500 mr-2">Delay between lights (ms)</label>
                    <input className="shadow-md bg-gray-100 focus:outline-none text-gray-700 w-14"
                        defaultValue='100'
                        onChange={(e) => {
                            setDelay(e.target.value)
                            setLightComps(lights)
                        }}
                    />
                </div>
            </div>
        </Page>
    )
}

export default ChristmasLightsApp
