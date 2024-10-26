import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FakestoreIndex } from './fakestore/fakestoreindex';
import { FakestoreCatgeories } from './fakestore/fakestorecategories';
import { FakestoreProducts } from './fakestore/fakestoreproducts';
import { FakestoreDetails } from './fakestore/fakestoredetails';
import { FakestoreRatig } from './fakestore/fakestoreratings';
import { Invalid } from './fakestore/invalid';
import { Admin } from './fakestore/fakestoreadmin';
import { Login } from './fakestore/fakestoreLogin';

function App() {
  return (
    <div>
  
   <BrowserRouter>
   <nav className="d-flex justify-content-between p-2 bg-dark text-white">
                <div className="h3">
                    Fakestore
                </div>
                <div>
                    <span className="me-3"><Link to='/' className=" text-decoration-none link-light">Home</Link></span>
                    <span className="me-3"><Link to='categories' className=" text-decoration-none link-light">Categories</Link></span>
                    <span className="me-3"><Link className=" text-decoration-none link-light" >Contacts</Link></span>
                    <span className="me-3"><Link to='admin' className=" text-decoration-none link-light" >Admin</Link></span>

                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-person-fill me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                </div>
            </nav>

   <Routes>
    <Route path='/' element={<FakestoreIndex/>}/>
    <Route path='categories' element={<FakestoreCatgeories/>}/>
    <Route path='products/:category' element={<FakestoreProducts/>}>
    <Route path='details/:id' element={<FakestoreDetails/>}>
    <Route path="rating/:id" element={<FakestoreRatig/>}/>


    </Route>
    </Route>
    
    <Route path='*' element={<div>page not found</div>}/>
    <Route path='invalid' element={<Invalid/>}/>
    <Route path='admin'  element={<Admin/>}/>

    <Route path='login'  element={<Login/>}/>
   </Routes>

   </BrowserRouter>
   </div>
   
  );
}

export default App;
