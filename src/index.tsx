import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { API } from "./config";
import Routes from "./Routes";
import store from "./store";

console.log(API);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
