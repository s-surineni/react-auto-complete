import './App.css';
import Autocomplete from './components/Autocomplete/Autocomplete';

function App() {
  return (
    <div className='autocomplete-container'>
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
    </div>
  );
}

export default App;
