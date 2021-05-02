import './App.css';
import TabsManager from './components/tab/TabsManager';
import styled from 'styled-components';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Scooters from './pages/Scooters';
import Users from './pages/Users';
import Errors from './pages/Errors';
import Parking from './pages/Parking';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <Container>
      <Router>
        <TabsManager />
        <Switch>
          <Route path="/scooters" component={Scooters} />
          <Route path="/users" component={Users} />
          <Route path="/errors" component={Errors} />
          <Route path="/parking" component={Parking} />
          <Redirect from="*" to="/scooters" />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
