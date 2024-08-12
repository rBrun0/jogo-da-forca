import React from 'react'
import './pernaDireita.css'

const PernaDireita = ({visivel}: {visivel: boolean}) => {
  return (
    <div className='pernaDireita' style={{opacity: `${visivel ? '1' : '0'}`}}></div>
  )
}

export default PernaDireita