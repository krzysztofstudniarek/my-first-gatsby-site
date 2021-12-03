import * as React from 'react'
import styled from 'styled-components'

import img from '../images/white_stars.png'

const HeaderReviewContainer = styled.div`
    width: 400px;
    height: 200px;
    position: absolute;
    top: 185px;
    left: 650px;
    align: center;
`

const ReviewsStars = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    position: relative;
    margin:auto;

    width: 116px;
    height: 24px;
`

const ReviewText = styled.div`
    padding-top: 15px;
    text-align: center;
    font-size: 22px;
    font-style: italic;
    font-weight: 100;
    color: white;
`

const ReviewSignature = styled.div`
    padding-top: 15px;
    position: absolute;
    right: 0px;

    font-size: 22px;
    font-style: italic;
    font-weight: bold;
    color: white;
`

const HeaderReview = () => {
    return(
        <HeaderReviewContainer>
            <ReviewsStars></ReviewsStars>
            <ReviewText>
                “Pani doktor jest bardzo miła i profesjonalna. 
                Szczegółowo wyjaśniła wszystkie moje wątpliwości 
                oraz dokładnie zapisała zalecenia z bardzo 
                pomocnymi komenatrzami ...”
            </ReviewText>
            <ReviewSignature>
                Monika R.
            </ReviewSignature>
        </HeaderReviewContainer>
    )
}

export default HeaderReview;