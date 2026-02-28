import { useState, useEffect} from 'react';

export function Contador() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count mudou para:", count);
    }, [])
    return(
        <>
        <button onClick={() => setCount(count + 1)}>
            Clicou {count} vezes
        </button>
        </>
    )
}