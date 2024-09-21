import Header from "./component/header";
import Slider from "./component/sliderr";
import Container1 from "./component/container1";
import Conatiner2 from "./component/container2";
import Conatiner3 from "./component/conatiner3";
import Container4 from "./component/container4";
import Location from "./component/location";
import Query from "./component/query";
import Registration from "./component/Registration";
import Footer from "./component/footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Container1/>
      <Conatiner2/>
      <Conatiner3/>
      <Container4/>
      <Location/>
      <Query/>
      <Registration/>
      <Footer/>
    </div>
  );
}

export default App;
