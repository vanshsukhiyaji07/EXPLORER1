// import React from 'react'

import { useEffect } from "react"

function User1(count) {

    useEffect(() => {
        console.log('user1')
    }, [count])

  return (
    <>
      <h2>hello from user1</h2>
    </>
  )
}

export default User1
