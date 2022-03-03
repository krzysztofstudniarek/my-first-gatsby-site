import styled from 'styled-components'

import * as React from 'react'
import {useState, useEffect}  from 'react'

import Mention from './Mention'
import AboutSectionContent from './AboutSectionContent'

const MentionsSectionContainter = styled.div`
    flex: 2;
    padding: 20px;
`
const MentionsSection = (props) => {

    const [mentions, setMentions] = useState(null);

    useEffect(() => {
        fetch("https://nqe733v84d.execute-api.us-east-2.amazonaws.com/default/debunkDesinformationFunction?sid=".concat(props.sid),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                response.json().then(
                    (data) => {
                        console.log(data);
                        setMentions(data);
                    }
                )
                .catch(error => {
                    alert("Mieliśmy problem z pobraniem danych skontaktuj się z administratorem!");
                    throw(error);
                })
            })
    }, [])

    if(mentions == null){
        return (
            <MentionsSectionContainter>
                <AboutSectionContent>
                    LOADING MENTIONS...
                </AboutSectionContent>
            </MentionsSectionContainter>
        )
    } 
    else {
        return (
            <MentionsSectionContainter>
                {mentions.map((mention) => (
                    <Mention 
                        content = {mention.content} 
                        url = {mention.url} title = {mention.author ? mention.author : mention.title}>
                    </Mention>
                ))}
            </MentionsSectionContainter>
        )
    }
}

export default MentionsSection;