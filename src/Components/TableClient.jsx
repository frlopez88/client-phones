import React from 'react'
import { useEffect, useState } from 'react'

export const TableClient = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "clients"
    const [clients, setClients] = useState([])

    const getClients = async () => {

        const url = `${baseUrl}${endPoint}`
        const result = await fetch(url)
        const data = await result.json()
        setClients(data)
    }

    const handleDelete = async (id) => {

        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE"
        })
    
        getClients()
    }

    useEffect(() => {
        getClients()
    }, [])

    return (
        <>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map((item) => (
                            <tr key={item.client_id}>
                                <td>{item.client_id}</td>
                                <td>{item.client_name}</td>
                                <td>{item.email}</td>
                                <td> <button className='btn btn-warning' onClick={ ()=>{
                                    handleDelete(item.client_id)
                                }  } >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
