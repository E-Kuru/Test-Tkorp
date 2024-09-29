import React from 'react'
import Link from 'next/link'

const Card = (props) => {

    const {width, height, name, info1, info2, border, background, link, id} = props

  return (
        <div class="card mx-2 my-2" style={{width : width, height : height, border : border, backgroundColor : background}}>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{info1}</h6>
                <p class="card-text">{info2}</p>
                <Link style={{textDecoration : "none", color : '#DC3545'}} href={`/${link}/${id}`} class="card-link">Know More..</Link>
            </div>
        </div>
)
}

export default Card