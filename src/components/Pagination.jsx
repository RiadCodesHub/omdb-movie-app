import React, {useState, useContext} from 'react'
import { movieContext } from '../context.jsx';
import { ArrowLeft, ArrowRight } from "lucide-react" 

const Pagination = () => {
  const {page, setPage, totalResults} = useContext(movieContext);
  const totalPages = Math.ceil(totalResults/10);

  if (totalPages === 0) return null;



  return (
    <div className='flex justify-center items-center gap-4 my-4 w-full'>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}><ArrowLeft /></button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}><ArrowRight /></button>
    </div>
  )
}

export default Pagination