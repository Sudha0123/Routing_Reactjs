import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function BApp() {
  return (
    <div className='mt-4 container-fluid'>
   <h1 className='align-center'>Shopper</h1>
   <BrowserRouter>
   <header>
  <button data-bs-toggle="offcanvas" data-bs-target="#navbar"className='bi bi-justify btn btn-primary'></button>
  <div className='offcanvas offcanvas-start' id='navbar'>
    <div className='offcanvas-header'>
      <h1>Shopper</h1>
      <button className='btn btn-close' data-bs-dismiss='offcanvas'></button>
    </div> 
    <div className='offcanvas-body'>
    <nav>
      <ul className='list-unstyled'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/mobiles">Mobiles</Link>|</li>
        <li>
        <Link to="/watches">Watches</Link></li>

     

      </ul>
        
     
    
     </nav>


    </div>

  </div>
    
   </header>


   

 <section>
    <Routes>
      <Route path='/' element={<div>Watches|mobiles|electronics</div>}/>
      <Route path='mobiles' element={<div><h1>mobiles</h1><p>ipphone</p>moto<p></p></div>}/>
      <Route path='watches' element={<div><h1>watches</h1> </div>} />
      <Route path='*' element={<div>Not found:'category your looking not found'</div>}/> 

    
    </Routes>
    </section>
    </BrowserRouter>
  
 
    </div>
  );
}

export default BApp;