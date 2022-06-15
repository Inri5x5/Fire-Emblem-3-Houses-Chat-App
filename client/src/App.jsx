import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import {Cookies} from 'universal-cookie';
import styled from 'styled-components';

import './App.css';

import ChannelContainer from './components/ChannelContainer';
import Channel from './components/Channel';

const App_wrapper = styled.div `
  display: flex;
  flex: 1;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.33) 0px 1px 4px 0px;
`

const chatApiKey = '4udxgakyhuxp';
const client = StreamChat.getInstance(chatApiKey);

const App = () => {

  return (
    <App_wrapper>
        <Chat client={client} theme="team light">
          <ChannelContainer>

          </ChannelContainer>
          <Channel>

          </Channel>
        </Chat>
    </App_wrapper>
  )
}

export default App;