import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';

import { Header } from './components/Header/Header';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';

import { Welcome } from './pages/Welcome/Welcome';
import { SignInResponse } from './types/types';
import { User } from './pages/User/User';

const Textbook = lazy(() => import('./pages/Textbook/Textbook'));


function App() {
  const [userInfo, setUser] = useState<SignInResponse | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string) as SignInResponse;
    if (user) setUser(user);
  }, [])
  return (
    <BrowserRouter basename={'/'}>
      <Header userInfo={userInfo} setUser={setUser}/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/textbook" element={<Textbook />} />
          <Route path="/signin" element={<SignIn setUser={setUser}/>} />
          <Route path="/signup" element={<SignUp setUser={setUser}/>} />
          <Route path="/user" element={<User userInfo={userInfo}/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
