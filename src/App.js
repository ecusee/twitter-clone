import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Timeline from './components/Timeline/Timeline';
import Trends from './components/Trends/Trends';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Timeline />
      <Trends />
    </div>
  );
}

export default App;
