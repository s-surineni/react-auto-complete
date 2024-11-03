import { useState } from "react";
import SuggestionsListComponent from "../SuggestionsListComponent/SuggestionsListComponent";
const Autocomplete = ({suggestionsList}) => {
    
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    // const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    // const [showSuggestions, setShowSuggestions] = useState(false);
    // TODO why did it not work when filteredSuggestions is normal array
    // is it because the value is being reset in every render?
    // let filteredSuggestions = [];
    const [inputText, setInputText] = useState("");
    const showSuggestions = (e) => {
        const enteredText = e.target.value;
        setInputText(enteredText);

        if (enteredText.length > 0) {
            const matchingWords = suggestionsList.filter((suggestion) => {
                // see what happens if we dont trim
                return suggestion.toLowerCase().indexOf(enteredText.toLowerCase().trim()) > -1;
            })
            setFilteredSuggestions(matchingWords);
        } else {
            setFilteredSuggestions([]);
        }

    }
    return (
        <>
            <input type="text"
                value={inputText}
                onChange={showSuggestions}/>

            <SuggestionsListComponent filteredSuggestions={filteredSuggestions} />
        </>
    )
};

export default Autocomplete;