import React, {useState} from 'react'
import {gql, useQuery} from "@apollo/client";
import Image from 'next/image'
import {useDebounce} from '../hooks/debounce'
import Loader from "react-loader-spinner";

// todo: add search and pagination

export type CharactersDTO = {
  id: string
  name: string;
  image: string;
}

const QUERY = gql`
  query GetAllCharacters {
    characters {
      results {
        name,
        image,
        id
      }
    }
  }
`

const Characters = () => {
  const { data, loading, error } = useQuery(QUERY, {
    fetchPolicy: "network-only"
  })
  // const [characters, setCharacter] = useState<CharactersDTO[]>([])
  const [filterCharacterStr, setFilterCharacterStr] = useState<string>('')
  const debouncedSearchTerm: string = useDebounce<string>(filterCharacterStr, 500);


  const handleFilter = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setFilterCharacterStr(inputValue)
  }

  if (loading) return (
    <div className="flex justify-center align-middle">
      <Loader
        type="Rings"
        color="#07865c"
        height={150}
        width={150}
        timeout={3000} //3 secs
      />
    </div>
  )

  if (error) throw new Error(error.message);

  return (
    <section className="container w-10/12 mx-auto mt-10 text-gray-300">
      <div className="flex align-middle justify-between mb-8">
        <h1 className="">Characters :</h1>
        <input type="text" onChange={handleFilter} placeholder="Enter character" className="text-gray-300 bg-transparent border-b-2 border-fuchsia-600 p-2"/>
      </div>
      <div className="grid grid-cols-6 gap-4 text-center">
        {data.characters.results.map(({id, name, image}: CharactersDTO) => (
          <div className="" key={id}>
              <Image src={image} width={200} height={200} alt="image" />
              <h3 className="">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Characters
