import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Page/Signup';
import MyTest from './Page/MyTest';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MyTest />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
