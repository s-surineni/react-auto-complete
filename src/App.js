import './App.css';
import Autocomplete from './components/Autocomplete/Autocomplete';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Autocomplete suggestionsList={[
        "Angular",
        "Blitzjs",
        "Gatsby",
        "Reactjs",
        "Vuejs",
        "Svelte",
        "Nextjs",
        "Node",
        "Express",
        "Sails",
        "Loopback",
        "React-router",
        "Redux",
        "Flux",
        "Yarn",
        "Npm"
      ]} />
    </>
  );
}

export default App;
