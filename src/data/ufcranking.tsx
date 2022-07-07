import axios from 'axios'
import { useState, useEffect } from 'react'

const api: string = process.env.REACT_APP_RAPID_API_KEY as string
const host: string = process.env.REACT_APP_RAPID_API_HOST as string

export function DataFetching() {
    const [data, setData] = useState<any[]>([])

    const options = {
        method: 'GET',
        url: 'https://current-ufc-rankings.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key': api,
            'X-RapidAPI-Host': host,
        },
    }

    useEffect(() => {
        axios
            .request(options)
            .then((response) => {
                console.log(response)
                setData(response.data)
            })
            .catch(function (error) {
                console.error(error)
            })
    }, [])

    const fighters = data.map((items) => items.fighters)
    const champions = fighters.map((object, index) => {
        return (
            <li key={index}>
                {object[0].fullName}
                <a href={`${object[0].url}`} key={object.id}>
                    Profile
                </a>
            </li>
        )
    })

    return (
        <div>
            <ul>{champions}</ul>
        </div>
    )
}
