import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/CodeVoyager3')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setdata(data)
    //     })
    // }, [])


    return (
        <div className="text-white text-4xl bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            Github following: {data.following}
            <img src={data.avatar_url} alt="Git-picture" width={300}/>
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/CodeVoyager3')
    return response.json()
}