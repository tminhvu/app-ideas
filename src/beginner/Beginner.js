import { Link } from "react-router-dom"
import Block from "../Block"

const Beginner = () => {
    return (
        <div className="grid grid-cols-2 gap-4 place-content-between mt-14">
            <Block><Link to='bin2dec'>Bin2Dec</Link></Block>
            <Block><Link to='borderradiuspreview'>BorderRadiusPreview</Link></Block>
            <Block><Link to='calculator'>Calculator</Link></Block>
            <Block><Link to='dollarstocents'>DollarsToCents</Link></Block>
            <Block><Link to='causeeffectapp'>CauseEffectApp</Link></Block>
            <Block><Link to='christmaslightsapp'>ChristmasLightsApp</Link></Block>
            <Block><Link to='colorcycle'>ColorCycle</Link></Block>
            <Block><Link to='countdowntimer'>CountdownTimer</Link></Block>
        </div>
    )
}

export default Beginner
