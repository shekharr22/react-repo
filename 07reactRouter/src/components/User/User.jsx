import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='p-2 text-3xl text-white bg-orange-500'>User: {userid} </div>
  )
}

export default User

