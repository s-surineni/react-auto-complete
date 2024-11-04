const SuggestionsListComponent = ({ filteredSuggestions,
    setInputText, setFilteredSuggestions,
    setDisplaySuggestions,
    displaySuggestions }) => {
    const handleClick = (e) => {
        setInputText(e.target.innerText);
        setFilteredSuggestions([]);
        setDisplaySuggestions(false);
    }
    return (filteredSuggestions.length ? (
        <ul className="suggestions-list">{filteredSuggestions.map((suggestion, index) => {
            return (<li key={index}
                onClick={handleClick}>{suggestion}</li>)
        })}</ul>)
        : displaySuggestions ? (<div>No suggestions</div>) : ""
    )
}
export default SuggestionsListComponent;