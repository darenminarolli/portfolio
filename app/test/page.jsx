'use client'
import React from 'react'

const page = () => {

  return (
    <>
    <button onClick={()=>dialog.showModal()} type='button'>show modal</button>

    <dialog id="favDialog">
  <form method="dialog">
    <p>The background shown outside of this dialog is a backdrop.</p>
    <button id="confirmBtn">Close the dialog</button>
  </form>
</dialog>
      
    </>
  )
}

export default page

