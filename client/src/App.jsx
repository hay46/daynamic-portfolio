import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/Layouts/publicLayout/PublicLayout';
import Home from './pages/publicPage/homePage/Home';
import About from './pages/publicPage/aboutPage/About';
import Service from './pages/publicPage/servicePage/Service';
import Portfolio from './pages/publicPage/portfolioPage/Portfolio';
import Contact from './pages/publicPage/contactPage/Contact';  
import login from './pages/publicPage/loginPage/Login'
import Login from './pages/publicPage/loginPage/Login';
import DashbordLayout from './components/Layouts/dashboardLayout/DashbordLayout.jsx';
import Dashboard from './pages/adminPage/dashboardPage/Dashboard.jsx'
import ProtecetdRoutes from './routes/ProtecetdRoutes.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public layout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />  
           <Route path="/login" element={<Login />} />   
        </Route>
        {/* admin routes */}
         <Route path="/admin" element={
          <ProtecetdRoutes>
            <DashbordLayout />
          </ProtecetdRoutes>

          }>
         <Route index element={<Dashboard/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;