import React from 'react'
import Link from "next/link";
import './globals.css'

const Home = () => {

  return (
    <div
      class="text-center"
      style={{height : '92vh', background: "url('https://static.vecteezy.com/system/resources/previews/025/939/825/non_2x/abstract-of-pet-cute-dog-golden-retriever-portrait-with-multi-colored-colorful-on-skin-body-and-hairs-paint-vibrant-bright-gradients-background-with-generative-ai-free-photo.jpeg') no-repeat center/cover"}}
      
    >
      <div className="mask h-100" style={{backgroundColor : "rgba(0, 0, 0, 0.6)"}}>
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="text-white d-flex justify-content-center align-items-center flex-column">
            <h1 className="mb-3 w-75" style={{fontSize : "10vh"}}>Welcome in this brand new site where you can discover some more about our friends</h1>
            <h4 className="mb-3 fs-light fw-light">Wanna know some more about dogs or their owners ?</h4>
            <div className="buttons my-4">
              <Link className="text-dark btn btn-outline-light btn-lg mx-2 bg-light" href="/Persons">
                Owners
              </Link>
              <Link className="text-dark btn btn-outline-light btn-lg mx-2 bg-light" href="/Animals">
                Dogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home