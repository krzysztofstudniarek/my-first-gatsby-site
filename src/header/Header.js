import * as React from 'react'
import styled from 'styled-components'

import img from '../images/top.jpg'

import HeaderContent from './HeaderContent'

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
            <HeaderContent></HeaderContent>
        </Background>
    )
}

export default Header;