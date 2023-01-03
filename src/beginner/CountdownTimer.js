import { useEffect, useState } from "react"
import styled from "styled-components"
import Page from "../Page"

const Create = styled.div`
    width: 43%;
`
const Wrapper = styled.div`
    width: 220px;
    display: flex;
    margin: 5px 0px;
    justify-content: space-between;
`

const Input = styled.input`
    width: ${props => {
        if (props.placeholder == 'Title')
            return '100%'
        return props.placeholder.length * 10
    }}px;
    font-size: 14px;
    box-sizing: border-box;
    padding: 1px 4px;
    outline: none;
`

const Button = styled.button`
    width: 50px;
    padding: 1px 4px;
    border: 1px solid gray;
    border-radius: 10%;
    box-sizing: border-box;
    background-color: lightseagreen;

    &:hover {
        background-color: white;
    }
`

const Display = styled.div`
    width: 57%;
    padding: 5px 0px;
`

const Title = styled.h6`
    color: darkcyan;
    font-weight: bold;
`
const DueDate = styled.span`
    font-style: italic;
`
const Countdown = styled.span`
    color: darkcyan;
    font-weight: bold;
`

const Clock = ({ event }) => {
    const countDown = milisecToCountDown(event.timeDiff)

    return (
        <Wrapper style={{ borderBottom: 'solid darkgreen 2px', justifyContent: 'space-around', width: '100%', padding: '0px', margin: '0px' }}>
            <Title>{event.title}</Title>
            <DueDate> at {event.hour}, on {event.date}/{event.month}/{event.year}</DueDate>
            <Countdown>ETA: {countDown}</Countdown>
        </Wrapper>
    )
}

function milisecToCountDown(ms) {
    const diff = new Date(ms)
    const days = diff.getDate() - 1
    const months = diff.getMonth()
    const years = diff.getFullYear() - 1970
    const hours = diff.getHours() - 8
    const minutes = diff.getMinutes()
    const seconds = diff.getSeconds()

    return hours + 'h ' + minutes + 'm ' + seconds + 's ' + days + 'd ' + months + 'm ' + years + 'y '
}

const timeDifInMs = (date) => {
    const now = new Date()
    const ms = (date.getTime() - now.getTime())

    return ms
}

const CountdownTimer = () => {
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')

    const [title, setTitle] = useState('')

    const temp = { timeDiff: 3600000, date: "6", hour: "21", month: "1", title: "test", year: "2023" }
    const temp2 = { timeDiff: 360000, date: "6", hour: "21", month: "1", title: "tes", year: "2023" }

    const [events, setEvents] = useState([temp, temp2])

    useEffect(() => {
        const interval = setInterval(() => {
            var newEvents = [...events]

            newEvents.forEach((e) => {
                e.timeDiff = e.timeDiff - 1000
            })

            setEvents(newEvents)
        }, 1000)

        return () => clearInterval(interval)
    }, [events])

    return (
        <Page style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '50px 20px' }}>
            <>
                <Create>
                    <Wrapper>
                        <Input value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                    </Wrapper>
                    <Wrapper>
                        <Input value={year} placeholder='Year' onChange={(e) => setYear(e.target.value)} />/
                        <Input value={month} placeholder='Month' onChange={(e) => setMonth(e.target.value)} />/
                        <Input value={date} placeholder='Date' onChange={(e) => setDate(e.target.value)} />:
                        <Input value={hour} placeholder='Hour' onChange={(e) => setHour(e.target.value)} />
                    </Wrapper>
                    <Wrapper>
                        <Button onClick={() => {
                            setEvents((old) => {
                                setTitle('')
                                setYear('')
                                setMonth('')
                                setDate('')
                                setHour('')

                                var h = hour === '' ? 0 : hour
                                const timeDiff = timeDifInMs(new Date(year, month - 1, date, h))
                                return [...old, { title: title, year: year, month: month, date: date, hour: h, timeDiff: timeDiff }]
                            })
                        }}>Start</Button>
                    </Wrapper>
                </Create>
                <Display>
                    {events?.map((e) => {
                        return <Clock key={e.title} event={e} />
                    })}
                </Display>
            </>
        </Page >
    )
}

export default CountdownTimer
