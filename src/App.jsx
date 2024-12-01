import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

//Componentes
import Navegacion from './components/Navegacion.jsx';
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Navegacion />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
