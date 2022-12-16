import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function FetchJoke() {
    const [joke, setJoke] = useState({})

    const fetchJoke = () => {
        // api call using axios
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then((res) => {
                // status should be 200
                if(res.status === 200){
                    console.log(res.data)
                    setJoke(res.data)
                }
            })
            .catch((errRes) => {
                if(errRes.response.status === 404) {
                    console.log('Either the api is not found or data not found in db!')
                } else {
                    console.log(errRes)
                }
            })
            .finally(() => {
                console.log('Finally: after .then or .catch is run')
            })
    }

    // useEffect(() => {
    //     console.log('every render')
    //     // is running on every render
    // }) // no dependency

    useEffect(() => {
        // console.log('mounted')
        fetchJoke()

        return () => {
            // console.log('unmounted')
        }
    }, []) // empty dependency array

    useEffect(() => {
        // console.log('joke data changed', joke)
    }, [joke]) // empty dependency array

    return (
        <div>
            <button onClick={() => fetchJoke()}>Fetch Random Joke</button>
            <div>{joke.value}</div>
            <pre>{JSON.stringify(joke, null, 2)}</pre>
        </div>
    )
}