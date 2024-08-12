import React from 'react'
import "./bracoEsquerdo.css"

const BracoEsquerdo = ({visivel}: {visivel: boolean}) => {
  return (
    <div className='bracoEsquerdo' style={{opacity: `${visivel ? '1' : '0'}`}}></div>
  )
}

export default BracoEsquerdo