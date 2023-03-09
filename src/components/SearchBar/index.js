import './styles.scss'

export const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => (
    <div className="row search-bar">
        <div className="col-12">
            <div className='content-wrap '>
                <form onSubmit={formSubmit}>
                    <input
                        type='text'
                        onChange={handleSearchKey}
                        placeholder='Search by title...'
                        value={value}
                        name='buscar'
                    />
                    {/* If the input has value, shows de clear input icon */}
                    {value && <span className='close-icon' onClick={clearSearch}><i className="fa fa-times"></i></span>}
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    </div>
)
