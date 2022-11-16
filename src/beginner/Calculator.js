import { useState } from "react"
import Page from "../Page"

const Button = (props) => {
    const text = props.text
    return (
        <button
            className="bg-cyan-50 border-2 border-cyan-100 rounded p-1 hover:border-black"
            onClick={() => {
                props.onClick(old => old + text);
            }}
        >{text}</button>
    )
}

const Calculator = () => {
    const [result, setResult] = useState('')
    const [expression, setExpression] = useState('')

    return (
        <Page>
            <div className="shadow-lg">
                <div className="p-1 h-8 shadow-lg">
                    <input
                        value={expression}
                        onChange={(e) => {
                            setExpression(e.target.value)
                        }}
                    ></input>
                </div>
                <div className="text-right p-1 bg-orange-50 h-8">
                    {result}
                </div>
                <div className="grid grid-cols-5 grid-rows-4 gap-1 p-1">
                    <Button text='(' onClick={setExpression} />
                    <Button text=')' onClick={setExpression} />
                    <Button text='BS' onClick={()=>{
                        setExpression(old => old.substring(0, old.length-1))
                    }} />
                    <Button text='C' onClick={() => {
                        setExpression('')
                    }} />
                    <Button text='=' onClick={() => {
                        setResult(eval(expression))
                    }} />
                    <Button text='7' onClick={setExpression} />
                    <Button text='8' onClick={setExpression} />
                    <Button text='9' onClick={setExpression} />
                    <Button text='*' onClick={setExpression} />
                    <Button text='/' onClick={setExpression} />
                    <Button text='4' onClick={setExpression} />
                    <Button text='5' onClick={setExpression} />
                    <Button text='6' onClick={setExpression} />
                    <Button text='+' onClick={setExpression} />
                    <Button text='-' onClick={setExpression} />
                    <Button text='1' onClick={setExpression} />
                    <Button text='2' onClick={setExpression} />
                    <Button text='3' onClick={setExpression} />
                    <Button text='0' onClick={setExpression} />
                    <Button text='.' onClick={setExpression} />
                </div>
            </div>
        </Page>
    )
}

export default Calculator
