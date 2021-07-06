
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import SignIn from "./Pages/signIn/SignIn";
import { Home } from "./Pages/home/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#00b7ff',
        dark: '#0087cb',
        contrastText: '#fff',
      },
      secondary: {
        light: '#9c9eb1',
        main: '#9c9eb1',
        dark: '#9c9eb1',
        contrastText: '#fff',
      },
 
    } 
  })
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
      <Switch>
      
        <Route path="/" exact component={Home} />
        <Route path="/signIn" component={SignIn} />

      </Switch>
      </ThemeProvider>
    </div>
  );
}
//test
export default App;
