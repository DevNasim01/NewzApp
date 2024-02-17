import React, { useState, useContext } from 'react';
import CatogryContext from '../Context/CatogryContext';

const NavBar = ({ onInputChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onInputChange(searchTerm); 
    setSearchTerm('');
  };


  const {setCatagory} = useContext(CatogryContext)

  return (
    <div>
      <nav id='navbar' className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NewsToday</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#' onClick={()=>{
                  setCatagory('business')
                }}>Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#' onClick={()=>{
                  setCatagory('entertainment')
                }}>Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#' onClick={()=>{
                  setCatagory('health')
                }}>Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#' onClick={()=>{
                  setCatagory('science')
                }}>Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#' onClick={()=>{
                  setCatagory('sports')
                }}>Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#' onClick={()=>{
                  setCatagory('technology')
                }}>Technology</a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleChange} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
