import React, { useState } from 'react';
import "./search.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Search() {
  const [searchBarActive, setSearchBarActive] = useState(false);

  const toggleSearchBar = () => {
    setSearchBarActive(!searchBarActive);
  };

  return (<>
    <div className="ui icon input icon">
        <input placeholder="Tìm kiếm" type="text" className="search-bar" />
        <a id="search-button" onClick={toggleSearchBar}><FontAwesomeIcon icon={faSearch} /></a>
    </div>
    </>
  );
}

export default Search;