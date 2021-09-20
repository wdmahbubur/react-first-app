
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

function Footer() {
  return (
    <div className="Footer">
      Copyright 2021
    </div>
  )
}

export default App;
