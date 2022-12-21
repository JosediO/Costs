import React from "react"
import { Link } from "react-router-dom"

function Home (){
    return (
        <>
            <h1>Home</h1>
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}

export default Home