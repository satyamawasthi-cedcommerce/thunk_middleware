import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css'
import FetchUser from "./FetchUser";

function App() {
  return (
    <>
      <Provider store={store}>
        <FetchUser/>
      </Provider>
    </>
  );
}

export default App;
