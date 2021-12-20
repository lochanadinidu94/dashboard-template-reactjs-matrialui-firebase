import './App.css';
import { Navigation } from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { routes } from './routes';
import { useStyle } from './Styles';
import clsx from 'clsx';


const App = () => {

  const classes = useStyle();

  return (  
    
    <div className={classes.root}>
    <Router>
      <Navigation/>
    </Router>    
    </div>
    
  );
}

export default App;
