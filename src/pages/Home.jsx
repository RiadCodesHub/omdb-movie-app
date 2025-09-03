import React from 'react'
import { useContext } from 'react';
import { movieContext, MovieProvider } from '../context.jsx';
import { Header } from '../data.js';
import Footer from '../components/Footer.jsx';
import { NavLink } from 'react-router';
import { Pagination } from '../data.js';


const Home = () => {
    const { movies, loading, error } = useContext(movieContext);

  return (
    <div className='relative max-w-[1280px] min-w-[420px] w-full h-auto mx-auto overflow-x-hidden'>
      <Header />
      <div className='relative  mx-auto w-full flex flex-col items-center'>
      <span className='mt-10 block text-center'>
      { loading && <p className='text-2xl'>Loading...</p> }
      { error && <p className='text-2xl text-red-500'>{error}</p> }
      </span>

     <div className='grid lg:grid-cols-3 h-full sm:grid-cols-2  md:px-[60px] md:py-[60px] p-[30px] gap-8 w-full'>
     { movies.length > 0 && movies.map((movie) => (
              <NavLink to={`/movie/${movie.imdbID}`} 
                      key={movie.imdbID} 
                      className="w-full h-fit border-2 p-4 rounded-xl group ">
                  <div className='mb-2 overflow-hidden rounded-xl '>
                    <img src={movie.Poster === 'N/A' ? '../assets/no_img.jpg' : movie.Poster} alt={movie.Title} className='w-full h-[360px] max-h-full object-fill flex-1 rounded-xl group-hover:scale-110 transition-transform duration-500' />
                </div>
                <div>
                <h2 className='text-lg font-bold text-gray-800'>{movie.Title.length > 20 ? `${movie.Title.substring(0, 20)}...` : movie.Title}</h2>
                <p className='text-gray-600 text-sm'>Year: {movie.Year}</p>
                <p className='text-gray-600 text-sm'>Type: {movie.Type}</p>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
    {movies.length > 0 && !loading && !error && <Pagination />}
    <Footer className="static bottom-0 mx-auto w-[100%]" />
    </div>
  )
}


export default Home