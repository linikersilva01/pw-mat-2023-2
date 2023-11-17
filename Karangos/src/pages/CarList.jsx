import React from 'react'
import myfetch from '../utils/myfetch'

export default function CarList(){
    const [car, setCar] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const result = await myfetch.get('cars')
            setCar(result)
        }
        catch(error){
            // Deu errado
            console.error(error)
            alert('Erro: ' + error.message)
        }

    }

    return (
        <>
            <h1> Listagem de carros </h1>
            <p>{JSON.stringify(car)} </p>
        </>
    ) 
}
