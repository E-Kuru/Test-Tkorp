'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '@/app/components/Loader/Loader';
import { getOneAnimal } from '@/app/api/animals';
import { TbDog } from "react-icons/tb";

const page = ({params}) => {

    const [animal, setAnimal] = useState([])

    useEffect(() => {
      getAnimal()
    },[])
    

    const getAnimal = async () => {
      
        const data = await getOneAnimal(params.animalId)
        
        setAnimal(data.data[0])
    }
  return (
    <div className="" style={{backgroundColor : "#343A40",height: "92vh"}}>
        {animal.length === 0 ? (
            <Loader text="Just a few seconds, it's loading.."/>
        ) : (
            <div className='d-flex flex-column justify-content-center align-items-center' style={{height: "100%", width : "100%"}}>
                <h1 className='text-white justify-self-start' style={{height : "10%"}}>Discover {animal.name}</h1>
                <div className="border bg-white rounded" style={{width: "40%", height : "80%"}}>
                    <div className="icon h-50 w-100 d-flex justify-content-center align-items-center">
                        <TbDog size={200} />
                    </div>
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item">Name : {animal.name}</li>
                        <li class="list-group-item">Species : {animal.species}</li>
                        <li class="list-group-item">Breed : {animal.breed}</li>
                        <li class="list-group-item">Weight : {animal.weight}</li>
                        <li class="list-group-item">Owner ID : {animal.ownerId}</li>
                        </ul>
                </div>
            </div>
        )}
    </div>
  )
}

export default page