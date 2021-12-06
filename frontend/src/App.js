import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar/navbar';
import Foot from './components/footer/footer';

import AppRouter from './components/router/router';

function App() {
  return (
   
    <div className="App">
      <Menu />
      <AppRouter />
      <Foot />
    </div>
    
  );
}

export default App;
