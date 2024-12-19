import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {
  About,
  Conversation,
  User
} from './pages';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

const App = () => {
  return (
    <main className='bg-slate-300/20 lg:h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/about" element={<About />} />
          <Route path="/userPref" element={<User />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App