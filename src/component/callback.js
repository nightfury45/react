import React, {useState, useCallback} from 'react'
import Content from './Content'

export function Callback() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return(
        <div style={{ padding: '10px 32px' }}>
            <Content onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}
