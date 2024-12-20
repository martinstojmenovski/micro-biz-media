import { Route, Routes } from 'react-router-dom';
import Hero from './pages/home/Hero';
import Work from './pages/common/Work';
import Error_404 from './pages/common/Error_404';
import Process from './pages/common/Process';
import Services from './pages/common/Services';
import useJOSAnimation from './hooks/useJOSAnimation';
import Layout from './components/layout/Layout';
import Careers from './pages/common/Carrers';
import About from './pages/common/About'
import Affiliate from './pages/common/Affiliate';
import CustomerService from './components/contact/Customer-service';

function App() {
  // Init JOS Animation
  useJOSAnimation();
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='micro-biz-media' element={<Hero />} />
          <Route path='work' element={<Work />} />  
          <Route path='process' element={<Process />} />
          <Route path='services' element={<Services />} />
          <Route path='careers' element={<Careers />} />
          <Route path='about' element={<About />} />
          <Route path='affiliate' element={<Affiliate />} />
          <Route path='customer-service' element={<CustomerService />} />
          <Route path='error-404' element={<Error_404 />} />
          <Route path='*' element={<Error_404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
