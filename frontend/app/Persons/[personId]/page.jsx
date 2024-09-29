'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { getOnePerson } from '@/app/api/persons';
import Loader from '@/app/components/Loader/Loader';
import { RxAvatar } from "react-icons/rx";

const page = ({params}) => {

    const [person, setPerson] = useState([])

    useEffect(() => {
      getPerson()
    },[])
    

    const getPerson = async() => {
        const data = await getOnePerson(params.personId)
        
        setPerson(data.data[0])
    }
  return (
    <div className="" style={{backgroundColor : "#343A40",height: "92vh"}}>
        {person.length === 0 ? (
            <Loader text="Just a few seconds, it's loading.."/>
        ) : (
            <div className='d-flex flex-column justify-content-center align-items-center' style={{height: "100%", width : "100%"}}>
                <h1 className='text-white justify-self-start' style={{height : "10%"}}>Discover {person.firstName}</h1>
                <div className="border bg-white rounded" style={{width: "40%", height : "80%"}}>
                    <div className="icon h-50 w-100 d-flex justify-content-center align-items-center">
                        <RxAvatar size={200} />
                    </div>
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item">First Name : {person.firstName}</li>
                        <li class="list-group-item">Last Name : {person.lastName}</li>
                        <li class="list-group-item">Email : {person.email}</li>
                        <li class="list-group-item">Phone Number : {person.phoneNumber}</li>
                        </ul>
                </div>
            </div>
        )}
    </div>
  )
}

export default page