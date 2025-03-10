import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { SearchIcon } from '../assets'

const ChannelSearch = () => {
  const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid #00000033;
  `;
  const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    margin-bottom: 8px;
    border: 1px solid transparent;
    width: 95%;
    &:focus-within {
      border: 1px solid #fff;
    }
  `;
  const SearchIconWrapper = styled.div`
    width: 32px;
    display: flex;
    justify-content: center;
  `;
  const InputText = styled.input`
    background: none;
    border: none;
    color: #fff;
    font-family: Helvetica Neue, sans-serif;
    font-size: 16px;
    outline: none;
    ::placeholder {
      color: rgba(255, 255, 255, 0.66);
      white-space: nowrap;
      width: 150px;
    }
  `
  
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  
  const getChannels = async (text) => {
      try {
      } catch (error) {
      }
  }

  const onSearch = (event) => {
      event.preventDefault();
      setLoading(true);
      setQuery(event.target.value);
      getChannels(event.target.value)
  }


  return (
    <Container>
      <InputWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <InputText 
            placeholder='Search' 
            type='text' 
            value={query} 
            onChange={onSearch}
        />
      </InputWrapper>
    </Container>
  )
}

export default ChannelSearch