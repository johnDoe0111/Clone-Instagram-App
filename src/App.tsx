import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import AutorizationPage from './pages/AutorizationPage';
import HomePage from './pages/HomePage';
import { token } from './api/baseServise';
import { useEffect } from 'react';
import { checkAutorization } from './reducers/user/autorizationAction';

const App = () => {

  const {isAdmin} = useAppSelector(state => state.autorization)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (isAdmin) {
      navigate('/home')
    }  else {
      navigate('/')
    }
  }, [isAdmin, navigate])
  

  useEffect(() => {
    if (token) {
      dispatch(checkAutorization())
    }
  }, [dispatch])

  return (
    <div>
      <Routes>
        <Route path='/' element={<AutorizationPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;