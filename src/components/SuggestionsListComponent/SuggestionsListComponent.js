const SuggestionsListComponent = ({ filteredSuggestions }) => {
    return (filteredSuggestions.length ? (
        <ul className="suggestions-list">{filteredSuggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}</ul>)
        : (
            <div>No suggestions</div>)

    )
}
export default SuggestionsListComponent;