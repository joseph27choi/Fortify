import React from 'react'
import { BackgroundDiv, ContainerDiv } from './GenericPageStyles'
import MenuBarComponent from '../components/MenuBar/MenuBarComponent'


const Messages = () => {
  return (
    <>
    <BackgroundDiv>
      <ContainerDiv>
        <MenuBarComponent highlightedItem='messages'/>

      </ContainerDiv>
    </BackgroundDiv>
    </>
  )
}

export default Messages