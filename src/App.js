import "./App.css";
// import Home from "./component/Home";
import HeaderContainer from "./container/HeaderContainer";
import HomeContainer from "./container/HomeContainer";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
