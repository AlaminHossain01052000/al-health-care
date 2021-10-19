import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ContactUsRoute from './components/ContactUsRoute/ContactUsRoute';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ServicesRoute from './components/ServicesRoute/ServicesRoute';
import Signup from './components/Signup/Signup';
import SpecialistDetails from './components/SpecialistDetails/SpecialistDetails';
import SpecialistRoute from './components/SpecialistRoute/SpecialistRoute';
import ViewAppointments from './components/ViewAppointments/ViewAppointments';
import AuthProvider from './context/AuthProvider';

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <ServicesRoute></ServicesRoute>

            </PrivateRoute>
            <PrivateRoute path="/specialist">
              <SpecialistRoute></SpecialistRoute>
            </PrivateRoute>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/specialistDetails/:specialistId">

              <SpecialistDetails></SpecialistDetails>
            </PrivateRoute>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/viewappointment">
              <ViewAppointments></ViewAppointments>
            </PrivateRoute>
            <PrivateRoute path="/contactus">
              <ContactUsRoute></ContactUsRoute>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
