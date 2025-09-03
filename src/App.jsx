import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, SinglePage} from './data.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SinglePage />} />
        <Route path="*" element={<h1 className='text-center text-[24px] mt-5'>404 Not Found</h1>} />
      </Routes>
</BrowserRouter>
  )
}

export default App