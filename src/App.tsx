import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Header } from './components/Header/Header';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';

import { Welcome } from './pages/Welcome/Welcome';

const Textbook = lazy(() => import('./pages/Textbook/Textbook'));

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/textbook" element={<Textbook />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
