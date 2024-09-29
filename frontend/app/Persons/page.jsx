'use client';
import React from 'react'
import { useState, useEffect } from 'react'
import { getAllPersons } from '../api/persons';
import Card from '../components/Card/Card';
import Loader from '../components/Loader/Loader';

const Persons = () => {
  const [persons, setpersons] = useState([])

  useEffect(() => {
    getpersons()
  }, [])
  

  const getpersons = async () => {
    const data = await getAllPersons()
    setpersons(data.data)
  }

  return (
    <div className='' style={{backgroundColor : "#343A40"}}>
      <div className="d-flex justify-content-center align-items-center py-3">        
        <h1 className="mb-3 w-75 text-center" style={{fontSize : "8vh", background: "-webkit-linear-gradient(45deg,#E46F18, #D00808, #13649C, #102A9B)", 
          WebkitBackgroundClip: "text", WebkitTextFillColor : "transparent"
        }}>
          Here we have all the owners.
        </h1>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {persons.length === 0 ? (
          <Loader text="Wait a second, our friends are coming.." />
        ) : (
          persons.map((e,i) => (
            <Card 
            key={i}
            name={e.lastName} 
            info1={e.firstName} 
            info2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, deserunt optio. Magni obcaecati earum, sapiente?' 
            width='23%' 
            border='3px solid #E46F18'
            link="Persons"
            id={e.id}
            />
          ))
        )}
      </div>
  </div>
  )
}

export default Persons