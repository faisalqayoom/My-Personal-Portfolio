import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Blog from '../pages/blog/Blog'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'
import Resume from '../pages/resume/Resume'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  )
}

export default Router