import { useEffect } from "react";

export function Hello() {

    useEffect(() => {
        console.log("Apareci na tela!");
    }, [])

    return(
        <>
        <p>Ola mundo!</p>
        </>
    );
}