import * as React from 'react'
import styled from 'styled-components'

import img from '../images/top.jpg'

import HeadercContent from './HeaderContent'

const Background = styled.div`
    text-align:center;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    width: 100%;
    height: 676px;
    background-image: url(${img});
`

const Header = () => {
    return(
        <Background>
            <HeadercContent></HeadercContent>
        </Background>
    )
}

export default Header;