import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {
  About,
  Chat,
  Conversation
} from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className='bg-slate-300/20 lg:h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Conversation />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Chat />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </main>
  )
}

export default App