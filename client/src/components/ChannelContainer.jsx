import React from 'react'
import {Cookies} from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
import styled from 'styled-components';

import SideBar from './SideBar.jsx';
import Header from './Header';
import ChannelSearch from './ChannelSearch.jsx';
import TeamChannelList from './TeamChannelList.jsx';
import TeamChannelPreview from './TeamChannelPreview.jsx';

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
        <ChannelList
          filters={{}}
          channelRenderFilterFn={ () => {} }
          List={(props_list) => {
            console.log(props_list)
            return (
              <TeamChannelList
                  {...props_list}
                  type="team"
              />
            )
          }}
          Preview={(preview_props) => (
            <TeamChannelPreview
              {...preview_props}
              type="team"
            />
          )}
        />
      </ListWrapper>
    </>
  )
}

export default ChannelContainer