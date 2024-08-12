import React from 'react'
import './BracoDireito.css'

const BracoDireito = ({visivel}: {visivel: boolean}) => {
  return (
    <div className='bracoDireito' style={{opacity: `${visivel ? '1' : '0'}`}}></div>
  )
}

export default BracoDireito