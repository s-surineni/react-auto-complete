const SuggestionsListComponent = ({ filteredSuggestions }) => {
    return (filteredSuggestions.length ? (
        <ul>{filteredSuggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}</ul>)
        : (
            <h1>No suggestions</h1>)

    )
}
export default SuggestionsListComponent;