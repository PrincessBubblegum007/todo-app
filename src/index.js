import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from '../src/screens/Home';
import Authentication, { AuthenticationMode } from '../src/screens/Authentication';
import ErrorPage from '../src/screens/ErrorPage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import UserProvider from './context/UserProvider';

const router = createBrowserRouter([
{
  errorElement: <ErrorPage />
},
{
  path:'/signin',
  element:<Authentication authenticationMode={AuthenticationMode.Login} />
},
{
  path:'/signup',
  element:<Authentication authenticationMode={AuthenticationMode.Register} />
},
{
  element:<ProtectedRoute />,
  children:[
    {
      path:'/',
      element:<Home />
    }
  ]
}
])

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>
)
