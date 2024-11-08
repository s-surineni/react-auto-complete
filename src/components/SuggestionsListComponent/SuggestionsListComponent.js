const SuggestionsListComponent = ({ filteredSuggestions,
    setInputText, setFilteredSuggestions,
    setDisplaySuggestions,
    displaySuggestions,
    focusedSuggestion }) => {
    const handleClick = (e) => {
        setInputText(e.target.innerText);
        setFilteredSuggestions([]);
        setDisplaySuggestions(false);
    }
    return (filteredSuggestions.length ? (
        <ul className="suggestions-list">{filteredSuggestions.map((suggestion, index) => {
            return (<li key={index}
                className={focusedSuggestion === index ? "suggestion-focused" : ""}
                onClick={handleClick}>{suggestion}</li>)
        })}</ul>)
        : displaySuggestions ? (<div>No suggestions</div>) : ""
    )
}
export default SuggestionsListComponent;