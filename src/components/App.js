import React, { useState, useEffect } from "react"

function App () {

    const [isLoaded, setIsLoaded] = useState(false);
    const [randomDog, setRandomDog] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setRandomDog(data.message)
            setIsLoaded(true)
        }
    )
    }, [])

    if(!isLoaded) return <p>Loading...</p>;
    
    return <img src={randomDog} alt="A Random Dog"/>

}

export default App;