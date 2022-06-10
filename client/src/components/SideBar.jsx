import React from 'react'
import Styled from 'styled-components'
import FE3HIcon from '../assets/fe3h.png'
import LogoutIcon from '../assets/logout.png'
import HospitalIcon from '../assets/hospital.png'


const SideBar = () => {

  const Styled_sidebar = Styled.div`
    width: 72px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), var(--primary-color);
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 320px) {
      display: none;
    }`;

    const Styled_sidebar_icon1 = Styled.div`
      width: 44px;
      height: 44px;
      margin: 14px;
      background: linear-gradient(
          150.64deg,
          rgba(0, 0, 0, 0.1) 12.73%,
          rgba(0, 0, 0, 0) 89.32%
        ),
        #ffffff;
      border-radius: 9999px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.33);
    `;

    const Styled_sidebar_icon1_inner = Styled.div`
      font-family: Helvetica Neue, sans-serif;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Styled_sidebar_icon2 = Styled.div`
      width: 44px;
      height: 44px;
      margin: 14px;
      background: linear-gradient(
          150.64deg,
          rgba(0, 0, 0, 0.1) 12.73%,
          rgba(0, 0, 0, 0) 89.32%
        ),
        #ffffff;
      border-radius: 9999px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.33);
      cursor: pointer;
    `;
  
  return (
    <>
      <Styled_sidebar>
        <Styled_sidebar_icon1>
          <Styled_sidebar_icon1_inner>
            <img src={ FE3HIcon } alt="FE3HIcon" width="30"></img>
          </Styled_sidebar_icon1_inner>
        </Styled_sidebar_icon1>

        <Styled_sidebar_icon2>
          <Styled_sidebar_icon1_inner>
            <img src={ LogoutIcon } alt="Logout" width="30"></img>
          </Styled_sidebar_icon1_inner>
        </Styled_sidebar_icon2>
      </Styled_sidebar>
    </>
  )
}

export default SideBar