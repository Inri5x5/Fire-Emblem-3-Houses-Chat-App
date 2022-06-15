import React from 'react'
import Styled from 'styled-components'

const Header = () => {

  const Header = Styled.div`
    padding-left: 16px;
    height: 62px;
  `;
  const HeaderText = Styled.p`
    font-family: Helvetica Neue, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
  `;
  return (
    <Header>
        <HeaderText>Fire Emblem 3 Houses Chat</HeaderText>
    </Header>
  )
}

export default Header