import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';

const Loader = (props) => {
  const {text} = props
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h2 className='text-light fw-light'>{text}</h2>
          <InfinitySpin color='#102A9B' height={40} />
        </div>
    </div>
  )
}

export default Loader