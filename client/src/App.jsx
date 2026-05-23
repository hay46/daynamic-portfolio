// import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import PublicLayout from './components/Layouts/publicLayout/PublicLayout';
import Home from './pages/publicPage/homePage/Home'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='' element={<PublicLayout/>}/>
     <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;