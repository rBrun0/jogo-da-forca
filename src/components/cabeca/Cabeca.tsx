import React from 'react'
import './cabeca.css'

const Cabeca = ({visivel}: {visivel: boolean}) => {
  return (
    <div className='cabecaDoBoneco' style={{opacity: `${visivel ? '1' : '0'}`}}></div>
  )
}

export default Cabeca