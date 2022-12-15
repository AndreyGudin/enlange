import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Textbook } from './pages/Textbook/Textbook';

import { Welcome } from './pages/Welcome/Welcome';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/textbook" element={<Textbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
