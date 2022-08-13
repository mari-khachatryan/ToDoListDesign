import './App.css';
import Todo from './components/Todo/Todo';
import Footer from './footer/Footer';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <div className="AppChild"> 
          <Header />
          <Todo />
          <Footer />
      </div>
    </div>
  );
}

export default App;
