import React, { useEffect, useRef, useState } from 'react'

import Nav from '../../components/browse/Nav'
import SearchResult from '../../components/search/SearchResult'
import './Search.css'

const Search = () => {
  const [query, setQuery] = useState({
    keyword: '',
    genre: '',
    mediaType: '',
    language: '',
    year: '',
  })
  const [searchInput, setSearchInput] = useState('')
  const genreRef = useRef()
  const mediaTypeRef = useRef()
  const languageRef = useRef()
  const yearRef = useRef()

  const handleSearch = () => {
    setQuery({
      keyword: searchInput,
      genre: genreRef.current.value,
      mediaType: mediaTypeRef.current.value,
      language: languageRef.current.value,
      year: yearRef.current.value,
    })
  }

  const resetSearch = () => {
    setQuery('')
    setSearchInput('')
  }

  return (
    <div className="app">
      <Nav />
      <div className="s009">
        <form>
          <div className="inner-form">
            <div className="basic-search">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Type Keywords"
                  onChange={e => setSearchInput(e.target.value)}
                  value={searchInput}
                />
                <div className="icon-wrap">
                  <svg
                    className="svg-inline--fa fa-search fa-w-16"
                    fill="#ccc"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="advance-input">
                  <label htmlFor="genre">Genre</label>
                  <input
                    id="genre"
                    type="text"
                    className="small-input"
                    ref={genreRef}
                  />
                </div>
                <div className="advance-input">
                  <label htmlFor="media">Media Type</label>
                  <select id="media" ref={mediaTypeRef}>
                    <option value="">Default</option>
                    <option value="">all</option>
                    <option value="movie">movie</option>
                    <option value="tv">tv</option>
                    <option value="person">person</option>
                  </select>
                </div>
                <div className="advance-input">
                  <label htmlFor="language">Language</label>
                  <select id="language" ref={languageRef}>
                    <option value="">Default</option>
                    <option value="en">en</option>
                    <option value="ja">ja</option>
                    <option value="ko">ko</option>
                  </select>
                </div>
                <div className="advance-input">
                  <label htmlFor="year">Year</label>
                  <select id="year" ref={yearRef}>
                    <option value="">Default</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="advance-search">
              <div className="row third">
                <div className="input-field">
                  <div className="result-count"></div>
                  <div className="group-btn">
                    <button
                      className="btn-delete"
                      onClick={resetSearch}
                      type="button"
                    >
                      RESET
                    </button>
                    <button
                      className="btn-search"
                      type="button"
                      onClick={() => handleSearch()}
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <SearchResult query={query} />
    </div>
  )
}

export default Search
