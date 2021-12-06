import React, { useRef, useState, useEffect} from 'react'

export function Countdown() {
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {

            setCount(prevCount => prevCount -1)
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(timerId.current)
    }

    console.log(count, prevCount.current)

    return(
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}