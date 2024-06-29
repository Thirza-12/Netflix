import Body from "./components/Body";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
const App=()=> {
  return (
    <Provider store={appstore}><Body/></Provider>
  );
}

export default App;
