import './App.css';
import AppRouter from './components/Rounting';
import Nested from './components/Nested';
import AppNested from './components/Nested';

function App() {
  return (
    <div className="App">
    <h1 className='head1'>App Routing</h1>
    <AppRouter />
    {/* <AppNested /> */}
    </div>
  );
}

export default App;
