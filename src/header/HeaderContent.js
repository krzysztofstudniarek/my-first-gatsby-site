import * as React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import CTAButton from '../common/CTAButton'

const HeaderContentContainer = styled.div`
    flex: 1;
    position:relative;
    width: 1040px; 
    margin:auto;
    height: 676px;
    margin-left: 200px;
    margin-right: 200px;
`

const HeaderContent = () => {
    return(
        <HeaderContentContainer>
            <Logo></Logo>
            <CTAButton></CTAButton>
        </HeaderContentContainer>
    )
}

export default HeaderContent;