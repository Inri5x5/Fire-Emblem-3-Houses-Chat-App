import React from 'react'
import styled from 'styled-components';

import { addChannel } from '../assets';

const TeamChannelList = ({ children, error = false, loading, type }) => {

  const TeamChannel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `
  const TeamChannelMessage = styled.p`
    color: #ffffff;
    padding: 0 16px;
  `
  const Header = styled.div`
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const HeaderTitle = styled.p`
    font-family: Helvetica Neue, sans-serif;
    font-size: 13px;
    line-height: 16px;
    height: 16px;
    color: rgba(255, 255, 255, 0.66);
    margin-bottom: 10px;
  `

  if (error) {
    return type === 'team' ? (
      <TeamChannel>
        <TeamChannelMessage>
          Connection Error
        </TeamChannelMessage>
      </TeamChannel>
    ) : null
  }

  if (loading) {
    return (
      <TeamChannel>
        <TeamChannelMessage style={{ height:"115px" }}>
          {type === 'team' ? 'Channels' : 'Messages'} loading...
        </TeamChannelMessage>
      </TeamChannel>
    )
      
  }

  return (
    <TeamChannel>
      <Header>
        <HeaderTitle>
          {type === 'team' ? 'Channels' : 'Direct Messages'}
        </HeaderTitle>
      </Header>
      {/* { children } */}
    </TeamChannel>
  )
}

export default TeamChannelList