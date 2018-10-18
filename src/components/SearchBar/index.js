import React from 'react';
import { Input, Button} from 'semantic-ui-react'

import './SearchBar.css'

const SearchBar = ({handleChange, submitSearch }) => (
  <div className="SearchBar_Container">
    <Input  
      onChange    = { handleChange } 
      size        = 'large' 
      icon        = 'search' 
      placeholder = 'Search...'
    />
    <Button 
      primary
      onClick = { submitSearch }
      size    = "large" 
      style   = {{ marginLeft: "12px" }}
    >
      Search
    </Button>
  </div>
);

export default SearchBar;