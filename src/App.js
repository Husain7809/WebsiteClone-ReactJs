import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import './index.css';
import Home from './AppComponent/Home';
import About from './AppComponent/About';
import Services from './AppComponent/Services';
import Contact from './AppComponent/Contact';
import Navbar from './AppComponent/Navbar';
import Footer from './AppComponent/Footer';


const App = () => {

  
  return (
    <>
      <div class="cursor"></div>
      <div class="cursor2"></div>

      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Contact" exact component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}


export default App;
