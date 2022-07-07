import axios from 'axios'
import { useState, useEffect } from 'react'

export function DataFetching() {
    const [data, setData] = useState<any[]>([])

    const options = {
        method: 'GET',
        url: 'https://current-ufc-rankings.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key':
                'e688f0f446mshcaf999c07cd93e4p1343e8jsna813f3c75ecf',
            'X-RapidAPI-Host': 'current-ufc-rankings.p.rapidapi.com',
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

    function topthree(value: any) {
        return value <= 3
    }

    const kek = data.map((items) => items.fighters)
    const heh = kek.map((kanyn) => kanyn[0].fullName)
    const burak = heh.map((lul) => {
        return <li>{lul}</li>
    })
    console.log(heh)
    // console.log(kek)
    return (
        <div>
            <ul>{burak}</ul>
        </div>
    )
}
