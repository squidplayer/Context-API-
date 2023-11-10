import logo from './logo.svg';
import './App.css';
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    <UserContextProvider>
      <h1> My new Form</h1>

      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
