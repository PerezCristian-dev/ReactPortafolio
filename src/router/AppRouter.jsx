import React, {lazy} from 'react'
import { Route, Routes } from 'react-router-dom'

import { Banner } from './../components/header/Banner';



const Lazy1 = lazy(()=> import("../components/body/Skills"))
const Lazy2 = lazy(()=> import("../components/body/Projects"))

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Banner/>}/>
        <Route path='about' element={<Lazy1/>}/>
        <Route path='projects' element={<Lazy2/>}/>
    </Routes>
  )
}
