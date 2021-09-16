import React, { Component } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";
import { MyHeader } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
      query:'',
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.query.trim()===""){
      toast.info("Введите название картинки");
      return;
    }
   this.props.onSubmit(this.state.query);
   this.setState({query:''});
  }

  handleChange = e => {
    this.setState({
      query:e.currentTarget.value
    });
  };

  render() {
    return (
      <MyHeader >
        <form className='searchForm' onSubmit={this.handleSubmit}>
          <button className='searchBtn' type="submit">
            <span className='searchLable'>Search</span>
          </button>
          <input
            className='searchInput'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.query}
          />          
        </form>
      </MyHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;