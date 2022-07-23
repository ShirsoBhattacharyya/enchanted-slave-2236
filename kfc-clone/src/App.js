import './App.css';
import Footer from './components/common/footer';
import Navbar from './components/common/navbar';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;