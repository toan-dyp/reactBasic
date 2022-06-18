import logo from './logo.svg';
import ListTodo from './Todos/ListTodo';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
