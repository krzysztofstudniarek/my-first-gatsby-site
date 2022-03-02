import * as React from 'react'
import styled from 'styled-components'

import AboutSection from './AboutSection'
import AboutSectionHeader from './AboutSectionHeader'
import AboutSectionContent from './AboutSectionContent'
import MentionsSection from './MentionsSection'

import Icon from '../common/Icon'

import specs_icon from '../images/specs_icon.png'

const AboutContainer = styled.div`
    display: flex;
    width: 100%;
`

const AboutContent = styled.div`
    flex: 1;
    height:100px;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-left: 20px;
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
                    <AboutSection>
                        <AboutSectionHeader>
                            Agresywni uchodźcy
                        </AboutSectionHeader>
                        <AboutSectionContent>
                            Wzmianki dotyczące uchodźców, potencjalnie agresywnych (kradzieże, włamania, etc.)
                        </AboutSectionContent>
                    </AboutSection>
                    <AboutSection>
                        <AboutSectionHeader>
                            Polskie myśliwce na ukrainie
                        </AboutSectionHeader>
                        <AboutSectionContent>
                            Wzmianki dotyczące przekazywanych Ukrainie myśliwców i potencjalnych fake newsów odnośnie ilości, stanu tych samolotów, etc.
                        </AboutSectionContent>
                    </AboutSection>
                    <AboutSection>
                        <AboutSectionHeader>
                            Bandera
                        </AboutSectionHeader>
                        <AboutSectionContent>
                            Wyłapywanie wszystkich wzmianek dotyczących bandery, banderowców i upa
                        </AboutSectionContent>
                    </AboutSection>
                    <AboutSection>
                        <AboutSectionHeader>
                            Ukraina - granica i uchodźcy
                        </AboutSectionHeader>
                        <AboutSectionContent>
                            Wzmianki dotyczące uchodźców, przekraczania granicy, etc
                        </AboutSectionContent>
                    </AboutSection>
                </Row>
                <Row>
                    <MentionsSection sid = "262728324" >
                        
                    </MentionsSection>
                    <MentionsSection sid = "262601092" >
                        
                    </MentionsSection>
                    <MentionsSection sid = "262336191" >
                        
                    </MentionsSection>
                    <MentionsSection sid = "262656756" >
                        
                    </MentionsSection>
                </Row>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;