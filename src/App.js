import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <HomePage/>
    <Footer/>
    </div>
  );
}

export default App;
