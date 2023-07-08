import React, { useEffect, useState } from "react";
import { createServer } from "miragejs"
import { json } from "stream/consumers";
createServer({
    routes() {
        this.namespace = "api"

        this.get("/movies", () => {
            return {
                movies: [
                    { id: 1, name: "Inception", year: 2010 },
                    { id: 2, name: "Interstellar", year: 2014 },
                    { id: 3, name: "Dunkirk", year: 2017 },
                ],
            }
        })
    },
})
export default function ProductListingPage() {
    interface Movies {
        id: number,
        name: string,
        year: number,
    }
    const [movies, setMovies] = useState<Movies[]>([]);
    useEffect(() => {
        fetch('/api/movies').then(r => r.json()).then((data: Movies[]) => {
            setMovies(data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    useEffect(() => {
        console.log("movies", movies);
    }, [movies]);
    return (<>
        <h1>ProductListingPage</h1>
        {/* .map((data: Movies) => <h1>{data.name}</h1>) */}
        {Array.isArray(movies) ? movies.map((d) => <h1>d.name</h1>) : (<h1>not array</h1>)}
    </>
    );
}