import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import {PayPalScriptProvider} from '@paypal/react-paypal-js'
import { Provider } from 'react-redux';
import store from './store.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/bootstrap.customs.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';  
import PrivateRoute from './components/PrivateRoute.js';
import Home from "./screens/Home.js"
import ProductScreen from "./screens/productScreen.js"
import CartScreen from "./screens/cartScreen.js"
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import PaymentScreen from './screens/paymentScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import AdminRoute from "./components/AdminRoute.js"
import OrderListScreen from "./screens/admin/OrderListScreen.js"
import ProductListScreen from './screens/admin/ProductListScreen.js';


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
          <Route path='/payment' element={<PaymentScreen/>} />
          <Route path = '/placeorder' element={<PlaceOrderScreen/>} />
          <Route path = '/order/:id' element={<OrderScreen/>}/>
          <Route path='/profile' element={<ProfileScreen/>}></Route>
        </Route> 

        <Route path='' element={<AdminRoute/>}>
          <Route path='/admin/orderlist' element={<OrderListScreen/>} /> 
          <Route path='/admin/productlist' element={<ProductListScreen/>} /> 
        </Route> 
        
      </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
      <RouterProvider router={router}/>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
