import React from 'react'
import { BackgroundDiv, ContainerDiv } from './GenericPageStyles'
import MenuBarComponent from '../components/MenuBar/MenuBarComponent'

const Events = () => {
  return (
    <BackgroundDiv>
        <ContainerDiv>
            <MenuBarComponent highlightedItem='events'/>

        </ContainerDiv>
    </BackgroundDiv>
  )
}

export default Events