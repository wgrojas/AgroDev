import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar/navbar';
import AppRouter from './components/router/router';
import Footer from './components/footer/footer'


function App() {
  return (
    <div className="App">
      <Menu />
      <AppRouter />
      <Footer/>
    </div>
  );
}

export default App;
