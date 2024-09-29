import axios from "axios"

const key = process.env.NEXT_PUBLIC_KEY

const getAllAnimals = async () => {
    const data = await axios.get(`${key}/animals`)
    return data
}

const getOneAnimal = async (id) => {
    const data = await axios.get(`${key}/animals/${id}`)
    return data
}

export{
    getAllAnimals,
    getOneAnimal
}