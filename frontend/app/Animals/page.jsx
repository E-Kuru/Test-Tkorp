'use client';
import React from 'react'
import { useState, useEffect } from 'react'
import { getAllAnimals } from '../api/animals';
import Card from '../components/Card/Card';
import Loader from '../components/Loader/Loader';

const Animals = () => {

  const [animals, setanimals] = useState([])

  useEffect(() => {
    getAnimals()
  }, [])
  

  const getAnimals = async () => {
    const data = await getAllAnimals()
    setanimals(data.data)
  }

  return (
    <div className='' style={{backgroundColor : "#343A40"}}>
      <div className="d-flex justify-content-center align-items-center py-3">        
        <h1 className="mb-3 w-75 text-center" style={{fontSize : "8vh", background: "-webkit-linear-gradient(45deg,#102A9B, #13649C, #D00808, #E46F18)", 
          WebkitBackgroundClip: "text", WebkitTextFillColor : "transparent"
        }}>
          Here discover all our dogs.
        </h1>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {animals.length === 0 ? (
          <Loader text="Wait a second, our friends are coming.."/>
        ) : (
          animals.map((e,i) => (
            <Card 
              key={i}
              name={e.name} 
              info1={e.breed} 
              info2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, deserunt optio. Magni obcaecati earum, sapiente?' 
              width='23%' 
              border='3px solid #13649C'
              link="Animals"
              id={e.id}
              />
          ))
        )}
      </div>
  </div>
  )
}

export default Animals