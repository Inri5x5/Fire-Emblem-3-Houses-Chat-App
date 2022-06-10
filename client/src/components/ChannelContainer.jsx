import React from 'react'
import {Cookies} from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import SideBar from './SideBar.jsx';

const ChannelContainer = () => {
  return (
    <>
      <SideBar />
    </>
  )
}

export default ChannelContainer