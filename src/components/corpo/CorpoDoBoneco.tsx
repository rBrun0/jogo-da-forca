import React from 'react'
import "./corpo.css"

const CorpoDoBoneco = ({visivel}: {visivel: boolean}) => {
  return (
    <div className='corpoDoBoneco' style={{opacity: `${visivel ? '1' : '0'}`}}></div>
  )
}

export default CorpoDoBoneco