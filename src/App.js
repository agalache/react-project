import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/taskListComponent';
import ContactListComponent from './components/container/contactListComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* componente propio Gretings.jsx */}
        {/* <GreetingF name="Ales"></GreetingF> */}
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
