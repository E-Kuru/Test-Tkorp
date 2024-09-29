import axios from "axios"

const key = process.env.NEXT_PUBLIC_KEY

const getAllPersons = async () => {
    const data = await axios.get(`${key}/persons`)
    return data
}

const getOnePerson = async (id) => {
    const data = await axios.get(`${key}/persons/${id}`)
    return data
}

export{
    getAllPersons,
    getOnePerson
}