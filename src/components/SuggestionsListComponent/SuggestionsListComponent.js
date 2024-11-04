const SuggestionsListComponent = ({ filteredSuggestions, setInputText }) => {
    const handleClick = (e) => {
        setInputText(e.target.innerText);
    }
    return (filteredSuggestions.length ? (
        <ul className="suggestions-list">{filteredSuggestions.map((suggestion, index) => {
            return (<li key={index}
                onClick={handleClick}>{suggestion}</li>)
        })}</ul>)
        : (<div>No suggestions</div>)
    )
}
export default SuggestionsListComponent;