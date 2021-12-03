import * as React from 'react'
import styled from 'styled-components'

import AboutHeader from './AboutHeader'
import AboutSection from './AboutSection'

const AboutContainer = styled.div`
    display: flex;
    width: 100%;
    height:100px;
`

const AboutContent = styled.div`
    flex: 1;
    height:100px;
    padding-top: 80px;
    margin-left: 200px;
    margin-right: 200px;
`

const Row = styled.div`
    display: flex;
    width: 100%;
`

const About = () => {
    return(
        <AboutContainer>
            <AboutContent>
                <Row>
                    <AboutHeader></AboutHeader>
                </Row>
                <Row>
                    <AboutSection></AboutSection>
                    <AboutSection></AboutSection>
                </Row>
                <Row>
                    <AboutSection></AboutSection>
                    <AboutSection></AboutSection>
                </Row>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;