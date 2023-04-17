import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState("true");
    const [error, setError] = useState(null);


    useEffect(() => {

        const abortControl = new AbortController;

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("A problem with fetching the data");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name !== "AbortError") {
                        setError(err.message);
                        setIsPending(false);
                        console.log("oohhh")
                    } else {
                        console.log("ERROR")
                    }
                })

            return () => abortControl.abort();
        }, 1000)


    }, [url]);
    return { data, isPending, error };
}


export default useFetch;