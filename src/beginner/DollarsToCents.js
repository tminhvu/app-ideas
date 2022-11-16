import { useEffect, useState } from "react"
import Page from "../Page"

function dollarsToCents(dollars) {
    return Math.round(dollars * 100)
}

function centsToCoins(cents) {
    var q, d, n, p
    q = Math.trunc(cents / 25)
    d = Math.trunc((cents - q * 25) / 10)
    n = Math.trunc((cents - q * 25 - d * 10) / 5)
    p = Math.trunc((cents - q * 25 - d * 10 - n * 5))
    return [q, d, n, p]
}

const DollaToCents = () => {
    const [dollars, setDollars] = useState('0')
    const [cents, setCents] = useState('0')
    const [quarters, setQuaters] = useState('0')
    const [dimes, setDimes] = useState('0')
    const [nickels, setNickels] = useState('0')
    const [pennies, setPennies] = useState('0')

    useEffect(() => {
        var [q, d, n, p] = centsToCoins(cents)
        setQuaters(q)
        setDimes(d)
        setNickels(n)
        setPennies(p)
    }, [cents])

    return (
        <Page>
            <div>
                <div className="grid grid-cols-2 gap-4 shadow-lg p-1 w-80">
                    <input className="w-full focus:outline-none"
                        placeholder="$0"
                        onChange={(e) => {
                            setDollars(e.target.value)
                        }}
                    />
                    <div className="text-right">is <span className="text-green-600">{cents}</span> cents</div>
                </div>

                <div className="pt-4 col-span-2 text-center p-1">
                    <div className="text-right">or
                        {quarters ? <span className="text-green-600"> {quarters} quarters</span> : null}
                        {dimes ? <span className="text-green-600"> {dimes} dimes</span> : null}
                        {nickels ? <span className="text-green-600"> {nickels} nickels</span> : null}
                        {pennies ? <span className="text-green-600"> {pennies} pennies</span> : null}
                    </div>
                </div>

                <div className="pt-4 col-span-2 text-center p-1">
                    <button className="bg-green-100 p-1 pl-2 pr-2 rounded-lg hover:bg-green-800 hover:text-white"
                        onClick={() => setCents(dollarsToCents(dollars))}>Convert</button>
                </div>
            </div>
        </Page>
    )
}

export default DollaToCents
