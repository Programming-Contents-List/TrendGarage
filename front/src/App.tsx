import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyTest from './Page/MyTest';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MyTest />} />
      </Routes>
    </Router>
  );
};

export default App;
