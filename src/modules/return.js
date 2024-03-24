import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router'

function Return() {
    const  navigate =useNavigate()
  return (
    <div>

    <button onClick={()=>navigate('/')} >Return To Home </button>
    </div>
  )
}

export default Return