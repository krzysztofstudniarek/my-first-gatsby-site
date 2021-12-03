import * as React from 'react'
import styled from 'styled-components'

import SectionHeader from './SectionHeader'
import TextContent from './TextContent'

const AboutHeaderContainer = styled.div`
    flex: 1;
`

const AboutHeader = () => {
    return (
        <AboutHeaderContainer>
            <SectionHeader>
                Poznajmy Się
            </SectionHeader>
            <TextContent>
                Jestem lekarzem rezydentem we wrocławskiej Klinice Dermatologii. 
                W swojej pracy jako dermatolog staram się zachować podejście całościowe 
                do pacjenta, poświęcając mu odpowiednią ilość czasu. 
            </TextContent>
        </AboutHeaderContainer>
    );
}

export default AboutHeader;