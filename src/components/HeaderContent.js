import * as React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import CTAButton from './CTAButton'
import HeaderReview from './HeaderReview'

const HeadercContentContainer = styled.div`
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
        <HeadercContentContainer>
            <Logo></Logo>
            <CTAButton></CTAButton>
            <HeaderReview></HeaderReview>
        </HeadercContentContainer>
    )
}

export default HeaderContent;