import React from 'react'
import Image from 'next/image'
import upsetRickImg from '../public/images/404.png'
import Link from 'next/link'

export interface BannerInterface {
  message: string;
  children?: JSX.Element
}

const Banner = ({message, children}: BannerInterface) => {
  return (
    <section className="relative h-60 container text-gray-50 rounded text-center bg-gradient-to-r from-green-500 to-blue-400">
      <h1 className="text-red-700 text-center mb-5 mt-5 text-3xl">{message}</h1>
      {children}
      <Link href="/">
        <button className="bg-gray-300 border-2 border-gray-300 rounded-md px-8 py-4 text-gray-700 m-2 w-1/5 text-xl hover:border-gray-700 hover:bg-gray-700 hover:text-gray-300 duration-300 ease-in-out">Go home</button>
      </Link>
      <div className="absolute right-30 -bottom-27 sm:-bottom-0">
        <Image src={upsetRickImg} width={200} height={200} alt="Upset Rick" />
      </div>
    </section>
  )
}

export default Banner