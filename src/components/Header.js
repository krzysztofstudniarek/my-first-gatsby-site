import * as React from 'react'
import styled from 'styled-components'

import img from '../images/top.jpg'

import HeadercContent from './HeaderContent'

const Background = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 676px;
    background-image: url(${img});
    background-size: 100%;
`

const Header = () => {
    return(
        <Background>
            <HeadercContent></HeadercContent>
        </Background>
    )
}

export default Header;