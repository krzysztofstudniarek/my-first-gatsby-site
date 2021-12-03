import * as React from 'react'
import styled from 'styled-components'

import img from '../images/logo.png'

const Logo = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    left: 0px;
    top:0px;
    width: 280px;
    height: 66px; 
`
export default Logo;