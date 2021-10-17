import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import OurServices from './components/OurServices/OurServices';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <OurServices></OurServices>
      {/* <div style={{ backgroundColor: "red", width: "300px", height: "1400px" }}></div> */}
    </div>
  );
}

export default App;
