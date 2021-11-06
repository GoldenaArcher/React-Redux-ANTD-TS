import ReactDOM from "react-dom";
import App from "./App";
import { API } from "./config";
import Routes from "./Routes";

console.log(API);

ReactDOM.render(<Routes />, document.getElementById("root"));
