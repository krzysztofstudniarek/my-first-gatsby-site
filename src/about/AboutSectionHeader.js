import * as React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    font-size: 22px;
    font-weight: 100;
    letter-spacing: 2px;
    padding-top: 10px;
    float: left;
`
const AboutSectionHeader = ({children}) => {
    return (
        <Header>
            {children}
        </Header>
    );
}

export default AboutSectionHeader;
