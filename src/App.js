import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessRegister from './pages/BusinessRegister';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/business-register" exact component={BusinessRegister}/>
          
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
