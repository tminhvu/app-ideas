import Page from "../Page"
import styled from "styled-components";
import { useState, useEffect } from "react";

const ColorInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0px;
`

const StyledInput = styled.input`
    display: block;
    background-color: ${props => props.color};
    width: 45px;
    padding: 5px 10px;
    box-shadow: 1px 10px 15px -3px rgb(0 0 0 / 0.1), 1px 4px 6px -4px rgb(0 0 0 / 0.1) ;
`
const Input = ({ color, handleColorChange, value }) => {
    return (
        <StyledInput color={color} maxLength={3} value={value} onChange={(e) => handleColorChange(e.target.value)}>
        </StyledInput>
    )
}
const PlusSign = styled.div`
    padding: 0px;
    margin: 0px;
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate(-100%, -50%);
    color: white;
    font-weight: 900;
    font-size: 25px;
    box-shadow: 1px 10px 15px -3px rgb(0 0 0 / 0.1), 1px 4px 6px -4px rgb(0 0 0 / 0.1) ;
`

const StartStop = styled.button`
    background-color: grey;
    margin: 10px 0px;
    width: 100%;
    &:hover {
        background-color: lightgrey;
    }
    box-shadow: 1px 10px 15px -3px rgb(0 0 0 / 0.1), 1px 4px 6px -4px rgb(0 0 0 / 0.1) ;
`

const Delay = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 10px 15px -3px rgb(0 0 0 / 0.1), 1px 4px 6px -4px rgb(0 0 0 / 0.1) ;
`
const DelayLabel = styled.div`
    box-sizing: border-box;
    width: 80px;
    height: 25px;
    background-color: lightgrey;
    display: block;
    padding: 4px 6px 4px 3px;
    font-size: 13px;
`
const DelayInput = styled.input`
    margin: auto;
    width: 70px;
    height: 25px;
    padding: 1px 5px;
    text-align: right;
    box-sizing: border-box;
`

const rgbFrom = (red, green, blue) => {
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}

const ColorCycle = () => {
    const [baseRed, setBaseRed] = useState(50)
    const [baseBlue, setBaseBlue] = useState(30)
    const [baseGreen, setBaseGreen] = useState(10)

    const [style, setStyle] = useState({})
    useEffect(() => {
        setStyle({
            backgroundColor: rgbFrom(baseRed, baseGreen, baseBlue)
        })
    }, [baseRed, baseBlue, baseGreen])

    const [redIncrement, setRedIncrement] = useState(0)
    const [greenIncrement, setGreenIncrement] = useState(0)
    const [blueIncrement, setBlueIncrement] = useState(0)
    const change = () => {
        setBaseRed(old => old + parseInt(redIncrement))
        setBaseGreen(old => old + parseInt(greenIncrement))
        setBaseBlue(old => old + parseInt(blueIncrement))
    }

    const [delay, setDelay] = useState(1000)
    const [interval, setIntervalId] = useState(0)
    const handleStartStop = () => {
        if (interval != 0) {
            setIntervalId(0)
            return clearInterval(interval)
        }
        setIntervalId(setInterval(change, delay))
    }

    return (
        <Page style={style}>
            <div style={{ width: '150px' }}>
                <ColorInput>
                    <Input color='indianred' handleColorChange={setBaseRed} value={baseRed} />
                    <Input color='mediumaquamarine' handleColorChange={setBaseGreen} value={baseGreen} />
                    <Input color='cornflowerblue' handleColorChange={setBaseBlue} value={baseBlue} />
                </ColorInput>
                <ColorInput>
                    <PlusSign>
                        +
                    </PlusSign>
                    <Input color='lightgrey' handleColorChange={setRedIncrement} value={redIncrement} />
                    <Input color='lightgrey' handleColorChange={setGreenIncrement} value={greenIncrement} />
                    <Input color='lightgrey' handleColorChange={setBlueIncrement} value={blueIncrement} />
                </ColorInput>
                <StartStop onClick={handleStartStop}>{interval == 0 ? 'Start' : 'Stop'}</StartStop>
                <Delay>
                    <DelayLabel>Delay (ms) </DelayLabel>
                    <DelayInput onChange={(e) => setDelay(e.target.value)} value={delay} />
                </Delay>
            </div>
        </Page>
    )
}

export default ColorCycle;
