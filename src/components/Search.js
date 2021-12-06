import React from 'react';

function Search(props) {
  return (
    <div>
      <input onChange={props.btnSearch} type="text" placeholder="Search beer" />
    </div>
  );
}

export default Search;
