import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 190px;
    height: 45px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #DB3069;
    border: none;

    font-size: 20px;
    font-weight: 100;

    color: white;
`
const ButtonContainer = styled.div`
    position: absolute;
    right: 0px;
    top:0px;
    width: 190px;
    height: 65px;
`

const CTAButton = () => {
    return (
        <ButtonContainer>
            <Button>
                Umów Wizytę
            </Button>
        </ButtonContainer>
    )
}

export default CTAButton