import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-900 text-gray-300 p-5 flex text-xl">
      <h1 className="mr-auto">Rick & Morty</h1>
      <nav>
        <ul className="flex justify-between align-middle">
          <li className="mr-10">
            <Link href="/episodes">Episodes</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
