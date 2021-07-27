import MyRouter from "./MyRouter";
import Provider from "./Provider";
import "./App.css";
import "./main.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <MyRouter />
      </div>
    </Provider>
  );
}

export default App;
