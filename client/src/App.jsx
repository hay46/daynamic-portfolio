import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/Layouts/publicLayout/PublicLayout';
import Home from './pages/publicPage/homePage/Home';
import About from './pages/publicPage/aboutPage/About';
import Service from './pages/publicPage/servicePage/Service';
import Portfolio from './pages/publicPage/portfolioPage/Portfolio';
import Contact from './pages/publicPage/contactPage/Contact';   // ✅ ADD THIS

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />   {/* Now Contact is defined */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;