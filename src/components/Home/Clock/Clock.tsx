import { useEffect, useState } from 'react'

export function Clock() {
    const [clock, setClock] = useState<string>()

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClock(date.toLocaleTimeString())
        }, 1000)
    }, [])

    return <div>{clock}</div>
}
