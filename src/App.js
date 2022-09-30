import './App.css';
import ContainerFormInput from './components/ContainerFormInput';
import UserContextProvider from './components/UserContext';
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ContainerFormInput />
      </UserContextProvider>
    </div>
  )
}

export default App;
