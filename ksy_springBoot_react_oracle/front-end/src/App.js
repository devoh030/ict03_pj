import logo from './logo.svg';
import './App.css';
import Header from './component/route/Header';
import RouterComponent from './component/route/RouterComponent';

function App() {
  return (
    <div className="App">
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo}/>
      <RouterComponent />
    </div>
  );
}

export default App;
