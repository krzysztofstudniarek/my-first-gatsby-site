import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 190px;
    height: 45px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #DB3069;
    border: none;
    color: white;

    &:hover {
        color: #DB3069;
        background-color: white
    }
`
const ButtonContainer = styled.div`
    position: absolute;
    right: 0px;
    top:0px;
    width: 190px;
    height: 65px;
`
const ButtonLink = styled.a`
    text-decoration: none;
    font-size: 20px;
    font-weight: 100;
    color: inherit;
`

const CTAButton = () => {
    return (
        <ButtonContainer>
            <Button>
                <ButtonLink 
                    href="https://www.znanylekarz.pl/agnieszka-studniarek/dermatolog-lekarz-w-trakcie-specjalizacji/wroclaw?utm_source=widget&utm_medium=link" 
                    rel="nofollow" 
                    target="_blank">
                        Umów wizytę
                </ButtonLink>
            </Button>
        </ButtonContainer>
    )
}

export default CTAButton