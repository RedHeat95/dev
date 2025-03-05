import { Provider } from "react-redux";

import { store } from "./redux/store";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
