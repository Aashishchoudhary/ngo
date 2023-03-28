
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './comp/Header';
import Home_page from './comp/Rout/Home_page';
import About from './comp/Rout/About';
import Profile from './comp/Rout/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        
          <Route  path="*"element={<Home_page/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
          
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
