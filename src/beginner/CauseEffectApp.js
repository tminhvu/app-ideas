import { useEffect, useState } from "react"
import Page from "../Page"

class People {
    constructor(name, street, city, country, telephone, birthday) {
        this.name = name
        this.street = street
        this.city = city
        this.country = country
        this.telephone = telephone
        this.birthday = birthday
    }
}

const initPeople = () => {
    return {
        vanA: new People('van a', '13', 'tphcm', 'vn', '123', '10202000'),
        vanB: new People('van b', '14', 'tphcm', 'vn', '123', '10202000'),
        vanC: new People('van c', '15', 'tphcm', 'vn', '123', '10202000'),
        vanD: new People('van d', '16', 'tphcm', 'vn', '123', '10202000'),
        vanF: new People('van f', '17', 'tphcm', 'vn', '123', '10202000'),
        vanE: new People('van e', '18', 'tphcm', 'vn', '123', '10202000'),
    }
}

const displayPerson = (person) => {
    return (
        <div className="pl-4">
            <ul>
                <li> Name: {person.name}</li>
                <li> Street: {person.street}</li>
                <li> City: {person.city}</li>
                <li> Country: {person.country}</li>
                <li> Telephone: {person.telephone}</li>
                <li> Birthday: {person.birthday}</li>
            </ul>
        </div>
    )
}

const generateLinks = (setPerson, people, activePerson) => {
    var links = []
    for (const [, value] of Object.entries(people)) {
        links = [...links, (
            <div key={Math.random()}>
                <a
                    className={
                        ((activePerson.name === value.name) ? "font-bold text-green-900 underline " : '')
                        + "hover:bg-green-100 p-1 pl-2 pr-2"
                    }
                    onClick={() => {
                        setPerson(value)
                    }}
                >{value.name}</a>
            </div>
        )]
    }
    return links
}

const CauseEffectApp = () => {
    const [person, setPerson] = useState(initPeople())
    const people = initPeople()
    const [links, setLinks] = useState(generateLinks(setPerson, people, person))

    useEffect(() => {
        setLinks(generateLinks(setPerson, people, person))
    }, [person])

    return (
        <Page>
            <div className="grid grid-cols-4 gap-4 w-full">
                <div className="w-32 p-4">
                    <span className="text-green-900 font-bold">People:</span>
                    <ul>
                        {links}
                    </ul>
                </div>

                <div className="col-span-3 bg-green-50 p-4">
                    <span className="font-bold">Details:</span>
                    {person ? displayPerson(person) : null}
                </div>
            </div>
        </Page>
    )
}

export default CauseEffectApp
