import './SearchForm.css'

const SearchForm = (props) => {

    return (
        <form onSubmit={props.submitHandler} className="app__search-form">
            <input onChange={props.changeHandler} className="app__search-input" type="text" placeholder="Aktobe" />
            <button className="app__search-btn" type="submit"></button>
        </form>
    )
}

export default SearchForm