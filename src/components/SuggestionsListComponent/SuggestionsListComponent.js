const SuggestionsListComponent = ({filteredSuggestions}) => {
    return (
        filteredSuggestions.length ? (<h1>{filteredSuggestions}</h1>) : <h1>No suggestions</h1>
    )
}
export default SuggestionsListComponent;