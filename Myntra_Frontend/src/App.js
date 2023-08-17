import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import { AllRoutes } from './component/Allroutes';

function App() {
  return (
    <div className="App">

      <div>
        <AllRoutes></AllRoutes>
      </div>

    </div>
  );
}

export default App;
