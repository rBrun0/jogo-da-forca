import React from 'react'
import './PernaEsquerda.css'

const PernaEsquerda = ({visivel}: {visivel: boolean}) => {
  return (
    <div className='pernaEsquerda'style={{opacity: `${visivel ? '1' : '0'}`}}></div>
  )
}

export default PernaEsquerda