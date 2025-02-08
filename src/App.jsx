import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ConnectionPage from './pages/ConnectionPage';
import ChatPage from './pages/ChatPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/connect" element={<ConnectionPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
