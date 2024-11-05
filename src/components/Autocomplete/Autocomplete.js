import { useState } from "react";
import SuggestionsListComponent from "../SuggestionsListComponent/SuggestionsListComponent";
const Autocomplete = ({ suggestionsList }) => {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    // const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    // const [showSuggestions, setShowSuggestions] = useState(false);
    // TODO why did it not work when filteredSuggestions is normal array
    // is it because the value is being reset in every render?
    // let filteredSuggestions = [];
    const [inputText, setInputText] = useState("");
    const [displaySuggestions, setDisplaySuggestions] = useState(false);
    const [focusedSuggestion, setFocusedSuggestion] = useState(0);
    const showSuggestions = (e) => {
        const enteredText = e.target.value;
        setInputText(enteredText);

        setDisplaySuggestions(true);
        setFocusedSuggestion(0);
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

    const handleKeyboardControl = (e) => {

        switch (e.key) {
            case "Enter": // enter
                setInputText(filteredSuggestions[focusedSuggestion]);
                setDisplaySuggestions(false);
                setFilteredSuggestions([]);
                break;
            case "ArrowUp": // up arrow
                if (focusedSuggestion === 0) {
                    return;
                }
                setFocusedSuggestion(focusedSuggestion - 1);
                break;
            case "ArrowDown": // down arrow
                if (focusedSuggestion === filteredSuggestions.length - 1) {
                    return;
                }
                setFocusedSuggestion(focusedSuggestion + 1);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <h1>React Autocomplete</h1>
            <h2>Want to see something cool?, start typing</h2>
            <label htmlFor="user-input">Autocomplete</label>
            <input type="text"
                id="user-input"
                value={inputText}
                placeholder="Type here"
                onChange={showSuggestions}
                onKeyDown={handleKeyboardControl} />

            <SuggestionsListComponent
                filteredSuggestions={filteredSuggestions}
                setInputText={setInputText}
                setFilteredSuggestions={setFilteredSuggestions}
                setDisplaySuggestions={setDisplaySuggestions}
                displaySuggestions={displaySuggestions}
                focusedSuggestion={focusedSuggestion} />
        </>
    )
};

export default Autocomplete;