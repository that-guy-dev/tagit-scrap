import React, { Component } from 'react';
import styled from 'styled-components';
import SearchImg from '../../assets/img/search_img.jpg';

const SearchHeader = styled.div`
  background: url(${SearchImg});
  background-size: cover;
  background-position: center;
  height: 70vh;
  widht: 100vw;
`;

class Search extends Component {
  render() {
    return <SearchHeader />;
  }
}
export default Search;
