import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './pages/Home/layout';
import HomePage from './pages/Home/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
