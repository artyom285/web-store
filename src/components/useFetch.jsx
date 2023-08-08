import { useState, useEffect } from "react";

function useFetch(url) {
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);

    //Fetch all objects with type banner
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setGame(data);
            setLoading(false);
        })
        .catch(error => console.log(error));    
    }, [url]);

    return { game, loading }
}

export default useFetch