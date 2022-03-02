import styled from 'styled-components'

import * as React from 'react'
import {useState, useEffect}  from 'react'

import Mention from './Mention'

const MentionsSectionContainter = styled.div`
    flex: 2;
    padding: 20px;
`
const MentionsSection = (props) => {

    const [Mentions, setMentions] = useState([]);

    useEffect(() => {
        fetch("http://ec2-18-223-120-80.us-east-2.compute.amazonaws.com/data/".concat(props.sid),
        {
            headers: {
                'Accept': 'application/json',
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
            })
    }, [])

    return (
        <MentionsSectionContainter>
            {Mentions.map((mention) => (
                <Mention 
                    content = {mention.content} 
                    url = {mention.url} title = {mention.author ? mention.author : mention.title}>
                </Mention>
            ))}
        </MentionsSectionContainter>
    )
}

export default MentionsSection;