import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ServicesRoute from './components/ServicesRoute/ServicesRoute';
import SpecialistDetails from './components/SpecialistDetails/SpecialistDetails';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <ServicesRoute></ServicesRoute>

          </Route>
          <Route path="/servicedetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/specialistDetails/:specialistId">

            <SpecialistDetails></SpecialistDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
