import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

//Componentes
import Navegacion from './components/Navegacion.jsx';
import Home from './pages/Home.jsx'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router basename="/DinamicButton/">
          <Navegacion />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
