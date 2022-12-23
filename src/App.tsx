import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Textbook } from './pages/Textbook/Textbook';

import { Welcome } from './pages/Welcome/Welcome';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/textbook" element={<Textbook />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
