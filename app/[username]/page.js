import React from 'react'
import PaymentPage from '../component/PaymentPage'

const Username = async ({ params }) => {

  const resolvedParams = await params

  return (
    <div>
      <PaymentPage username={resolvedParams.username} />
    </div>
  )
}

export default Username