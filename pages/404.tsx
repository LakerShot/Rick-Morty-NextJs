import React from 'react'
import Banner from '../components/banner'

const NotFoundPage = () => {
  return (
    <div className="flex justify-center align-middle mt-10 mx-auto ">
      <Banner message="Page not Found" >
        <p className="text-xl mb-5 text-">You got redirected because the page you requested does not exist unfortunately </p>
      </Banner>
    </div>
  )
}

export default NotFoundPage