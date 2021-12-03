import * as React from 'react'
import styled from 'styled-components'

const AboutSectionUl = styled.ul`
    clear: both;
    font-size: 22px;
    font-weight: 100;
    line-height: 1.5;
    opacity: 50%;
`

const AboutSectionContent = ({children}) => {
    return(
        <AboutSectionUl>
            {children}
        </AboutSectionUl>
    )
}

export default AboutSectionContent;