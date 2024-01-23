import "./App.css";
import { Boxwidth } from "./components/Boxwidth";
import { ThemeProvider } from "./components/Theme";

//this is an example for useContext Hook
function App() {
  return (
    //theme provider works as an external function that accepts children as params
    <ThemeProvider>
      <Boxwidth />
    </ThemeProvider>
  );
}

export default App;
