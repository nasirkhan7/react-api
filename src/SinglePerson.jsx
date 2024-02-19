import React from 'react'
import {FaUser } from 'react-icons/fa';
import {CiGlobe } from 'react-icons/ci';

const SinglePerson = ({avatar_url,login,type}) => {
  return (
    <>
    <img width='100%' src={avatar_url} alt="" />
    <h3 className='text-capitalize'>{login}</h3>
    <h6>{type=== 'User' ? <FaUser/> : <CiGlobe/> }</h6>
    </>
  )
}

export default SinglePerson