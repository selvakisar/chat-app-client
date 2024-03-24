import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import Form from './modules/Form';
import Dashboard from './modules/Dasboard';





const ProtectedRoute = ({ children, auth=false }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || false;

  if(!isLoggedIn && auth) {
    return <Navigate to={'/users/sign_in'} />
  }else if(isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)){
    console.log('object :>> ');
    return <Navigate to={'/'} />
  }

  return children
}




function App() {
  return (
    <Routes>
    <Route path='/' element={
      <ProtectedRoute auth={true}>
        <Dashboard/>
      </ProtectedRoute>
    } />
    <Route path='/users/sign_in' element={
    <ProtectedRoute>
      <Form isSignInPage={true}/>
    </ProtectedRoute>
    } />
    <Route path='/users/sign_up' element={
      <ProtectedRoute>
      <Form isSignInPage={false}/>
    </ProtectedRoute>
    } />
  </Routes>

  );
}

export default App;