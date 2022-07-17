import './App.css';
import '../list-header/list-header'
import ListHeader from "../list-header/list-header";
import ListCard from "../card/card";

function App() {
  return (
    <div className="App">
        <ListHeader />
        <ListCard />
    </div>
  );
}

export default App;
