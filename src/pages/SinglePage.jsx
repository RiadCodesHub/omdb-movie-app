import React from 'react'
import { useParams } from 'react-router'
import { useContext } from 'react';
import { movieContext } from '../context.jsx';
import { Header, Footer } from '../data.js';

const SinglePage = ({ }) => {
  const { id } = useParams();
  const { movies, loading } = useContext(movieContext);

  const movie = movies.find((m) => m.imdbID === id);

    if (loading) {
      return <p className='text-blue-900 text-center text-[24px] mt-5'>Loading...</p>;
    }

  return (
    <>
    <Header />
    <div className='h- flex items-center justify-center py-[60px] w-full mx-auto '>
    <div className="m-auto  max-h-full h-full  md:w-[600px] border-2 overflow-hidden p-6 rounded-xl flex items-center justify-center gap-4">
       <div className="md:w-[60%] w-full">
      <img className="max-w-full h-auto object-cover rounded-xl" src={movie.Poster} alt={movie.Title} />
      </div>
      <div className='md:w-[40%] w-full'>
      <h2 className="text-[24px] font-bold text-gray-800">{movie.Title}</h2>
      <p className="text-[16px] text-gray-600">Year: {movie.Year}</p>
      <p className="text-[16px] text-gray-600">Type: {movie.Type}</p>
      </div>
    </div>
    </div >
    <Footer />
    </>
  )
}

export default SinglePage