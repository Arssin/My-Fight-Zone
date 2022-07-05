import { useEffect, useState } from 'react'
import './Clock.scss'

export function Clock() {
    const [clock, setClock] = useState<string>()

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClock(date.toLocaleTimeString())
        }, 1000)
    }, [])

    return (
        <div className="clock">
            <div className="innerDiv">⏰ {clock}</div>
        </div>
    )
}
