import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/bootstrap.customs.css';
import App from './App';
import reportWebVitals from './reportWebVitals';  
import PrivateRoute from './components/PrivateRoute.js';
import Home from "./screens/Home.js"
import ProductScreen from "./screens/productScreen"
import CartScreen from "./screens/cartScreen.js"
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/> 
      <Route path='/cart' element={<CartScreen/>} />
      <Route path='/login' element={<LoginScreen/>} />
      <Route path='/register' element={<RegisterScreen/>} />
     

      <Route path='' element={<PrivateRoute/>}>
          <Route path='/shipping' element={<ShippingScreen/>} /> 
        </Route> 
      </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
