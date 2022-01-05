import React from 'react';

const Search = () => {
  return (
    <div className="px-4 pt-4">
      <h4 className="mb-4">Chats</h4>
      <div className="search-box chat-search-box">
        <div className="input-group mb-3 bg-light  input-group-lg rounded-lg">
          <div className="input-group-prepend">
            <button className="btn btn-link text-muted pr-1 text-decoration-none" type="button">
              <i className="ri-search-line search-icon font-size-18"/>
            </button>
          </div>
          <input type="text" className="form-control bg-light" placeholder="Search messages or users"/>
        </div>
      </div>
    </div>
  );
};

export default Search;
