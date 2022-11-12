import { useState } from "react";
import Page from "../Page";

const bin2Dec = (binary) => {
    var dec = 0;
    console.log(binary)
    var digits = binary.split('')

    for (var i = digits.length - 1, j = 0; i >= 0; i--, j++) {
        dec += digits[i] * Math.pow(2, j)
    }

    return dec
}

const Bin2Dec = () => {
    const [decimal, setDecimal] = useState('')
    const [bin, setBin] = useState('')
    return (
        <Page>
            <div className='shadow-lg'>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-1 m-1"
                    type='text'
                    onChange={e => {
                        if (isNaN(+e.target.value)) {
                            alert('numbers only')
                            e.target.value = bin
                        } else if (e.target.value.charAt(e.target.value.length-1) > 1) {
                            alert('only zeros and ones')
                            e.target.value = bin
                        }
                        else {
                            setBin(e.target.value)
                        }
                    }}
                ></input>
                <button
                    className="bg-gray-100 p-1 m-1"
                    onClick={() => setDecimal(bin2Dec(bin))}
                >Convert</button>
                <div className="p-1 m-1">
                    Decimal is {decimal}
                </div>
            </div>
        </Page>
    )
}

export default Bin2Dec
