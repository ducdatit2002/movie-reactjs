import React from 'react'
import { PropagateLoader } from 'react-spinners'
export default function Spinner() {
  let isLoading = useSe
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PropagateLoader size={150} color="#36d7b7" speedMultiplier={3}/>
    </div>
  )
}
