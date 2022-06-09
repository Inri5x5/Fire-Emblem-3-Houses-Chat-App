import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import {Cookie} from 'universal-cookie';

const chatApiKey = '4udxgakyhuxp';
const client = StreamChat.getInstance(chatApiKey);

const App = () => {
  return (
    <div>
        <Chat client={client} theme="team light">
          <ChannelContainer>

          </ChannelContainer>
        </Chat>
    </div>
  )
}

export default App;