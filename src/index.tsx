import { ConnectedRouter } from "connected-react-router";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { API } from "./config";
import Routes from "./Routes";
import store, { history } from "./store";
import "antd/dist/antd.css";
import "./style.css";
import AnotherStore from "./anotherStore";

console.log(API);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AnotherStore>
        <Routes />
      </AnotherStore>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
