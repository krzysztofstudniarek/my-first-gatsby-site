import * as React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
    display: flex;
    width: 100%;
    text-align:center;
    width: 100%;
    height:100px;
    background-color: black;
`
const AboutContent = styled.div`
    flex: 1;
    background-color: black;
    height:100px;
`
const About = () => {
    return(
        <AboutContainer>
            <AboutContent>

            </AboutContent>
        </AboutContainer>
    )
}

export default About;