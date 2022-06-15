import React from 'react'
import {Cookies} from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
import styled from 'styled-components';

import SideBar from './SideBar.jsx';
import Header from './Header';
import ChannelSearch from './ChannelSearch.jsx';

const ChannelContainer = () => {
  const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--primary-color);
    width: 240px;
  `;
  
  return (
    <>
      <SideBar />
      <ListWrapper>
        <Header />
        <ChannelSearch />
      </ListWrapper>
    </>
  )
}

export default ChannelContainer