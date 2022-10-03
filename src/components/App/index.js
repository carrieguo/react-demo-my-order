import logo from '../../logo.svg';
import './App.css';
import OrderList from '../OrderList';
import Header from '../Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <OrderList/>
    </div>
  );
}

export default App;
