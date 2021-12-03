import * as React from 'react'
import styled from 'styled-components'

import AboutHeader from './AboutHeader'
import AboutSection from './AboutSection'
import AboutSectionHeader from './AboutSectionHeader'
import Icon from './Icon'
import AboutSectionContent from './AboutSectionContent'

import specs_icon from '../images/specs_icon.png'
import edu_icon from '../images/edu_icon.png'
import interns_icon from '../images/interns_icon.png'
import lang_icon from '../images/lang_icon.png'

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
                    <AboutSection>
                        <Icon url= {specs_icon}></Icon>
                        <AboutSectionHeader>
                            SPECJALIZACJA
                        </AboutSectionHeader>
                        <AboutSectionContent>
                            <li>Dermatologia i Wenerologia</li>
                        </AboutSectionContent>
                    </AboutSection>
                    <AboutSection>
                        <Icon url= {edu_icon}></Icon>
                        <AboutSectionHeader>
                            WYKSZTAŁCENIE
                        </AboutSectionHeader>
                        <AboutSectionContent>
                            <li>Uniwersytet Medyczny w Łodzi</li>
                        </AboutSectionContent>
                    </AboutSection>
                </Row>
                <Row>
                <AboutSection>
                        <Icon url= {interns_icon}></Icon>
                        <AboutSectionHeader>
                            STAŻE
                        </AboutSectionHeader>
                        <AboutSectionContent>
                            <li>Szpital im. Pirogowa w Łodzi</li>
                            <li>Warwick Coventry Hospital, UK</li>
                            <li>Marienhausklinikum w Saarlouise, DE</li>
                            <li>Marienhausklinikum st.Joseph w Losheim am See</li>
                        </AboutSectionContent>
                    </AboutSection>
                    <AboutSection>
                        <Icon url= {lang_icon}></Icon>
                        <AboutSectionHeader>
                            JĘZYKI
                        </AboutSectionHeader>
                        <AboutSectionContent>
                            <li>Polski</li>
                            <li>Angielski</li>
                            <li>Niemiecki</li>
                        </AboutSectionContent>
                    </AboutSection>
                </Row>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;