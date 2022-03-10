import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Board from './pages/Board';
import List from './pages/List';
import Add from './pages/Add';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/List" element={<List />} />
        <Route path="/Add" element={<Add />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
