import './SearchForm.css'

const SearchForm = ({changeHandler, submitHandler}) => {

    return (
        <form onSubmit={submitHandler} className="app__search-form">
            <input onChange={changeHandler} className="app__search-input" type="text" placeholder="Aktobe" />
            <button className="app__search-btn" type="submit"></button>
        </form>
    )
}

export default SearchForm