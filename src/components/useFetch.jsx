import { useState, useEffect } from "react";

function useFetch(url) {
    const [game, setGame] = useState([]);

    //Fetch all objects with type banner
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setGame(data);
        })
        .catch(error => console.log(error));
    }, [url]);

    return { game }
}

export default useFetch