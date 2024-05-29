import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LayOut() {
  return (
    <div>
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    </div>
  )
}
