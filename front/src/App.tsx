import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Page/Signup';
import MyTest from './Page/MyTest';
import Visited from './Page/Visited';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MyTest />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Visited' element={<Visited />} />
      </Routes>
    </Router>
  );
};

export default App;
