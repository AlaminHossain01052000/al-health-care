import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import OurServices from './components/OurServices/OurServices';
import OurSpecialists from './components/OurSpecialists/OurSpecialists';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <OurServices></OurServices>
      <OurSpecialists></OurSpecialists>
      <ContactUs></ContactUs>
      <Footer></Footer>
      {/* <div style={{ backgroundColor: "red", width: "300px", height: "1400px" }}></div> */}
    </div>
  );
}

export default App;
