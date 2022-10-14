import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Education, Projects } from '../components/body';
import { Banner } from './../components/header/Banner';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Banner/>}/>
        <Route path='about' element={<Skills/>}/>
        <Route path='projects' element={<Projects/>}/>
    </Routes>
  )
}
