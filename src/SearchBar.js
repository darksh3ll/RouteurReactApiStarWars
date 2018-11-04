import React from "react"

const SearchBar = ({change}) => {
    return (
        <div>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Search</label>
                <input
                    onChange={change}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Search personnages"
                />
            </div>
        </form>
        </div>

)
};

export default SearchBar