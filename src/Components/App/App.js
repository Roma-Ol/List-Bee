import './App.css';
import ListHeader from "../list-header/list-header";
import ListCard from "../card/card-wrapper/card";

function App() {
  return (
    <div className="App">
        <div className="card">
            <ListHeader />
            <ListCard />
        </div>
    </div>
  );
}

export default App;
