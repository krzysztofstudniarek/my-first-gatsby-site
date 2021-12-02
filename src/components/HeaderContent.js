import * as React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import CTAButton from './CTAButton'

const HeadercContentContainer = styled.div`
    position: relative;
    width: 1040px; 
    margin:auto;
    height: 676px;
`

const HeaderContent = () => {
    return(
        <HeadercContentContainer>
            <Logo></Logo>
            <CTAButton></CTAButton>
        </HeadercContentContainer>
    )
}

export default HeaderContent;