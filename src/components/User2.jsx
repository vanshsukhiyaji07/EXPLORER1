// import React from 'react'

import { useEffect } from "react"

function User2() {

    useEffect(() => {
        console.log('user2')
    }, [])
  return (
    <>
     <h2>hello from user2</h2> 
    </>
  )
}

export default User2
