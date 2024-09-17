import React from 'react'
import styled from 'styled-components'
import bronze from '../../assets/bronze_medal.png'

const Carousel = () => {
  return (
    <>
      <StyledDiv>
        <RankIMG src={bronze} />
        <div>Bronze</div>

        <Red />
      </StyledDiv>
    </>
  )
}

export default Carousel


const StyledDiv = styled.div`
    background-color: darkgray;


    width: 35rem;
    height: 40rem;
`

const RankIMG = styled.img`
  width: 5rem;
`

const MainWeapon = styled.img`

`

const Red = styled.div`
  background-color: red;
  width: 100%;
`