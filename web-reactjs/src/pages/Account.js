import React from 'react'
import { BackgroundDiv, ContainerDiv } from './GenericPageStyles'
import MenuBarComponent from '../components/MenuBar/MenuBarComponent'

const Account = () => {
  return (
    <>
        <BackgroundDiv>
            <ContainerDiv>
                <MenuBarComponent highlightedItem='account'/>
                
            </ContainerDiv>
        </BackgroundDiv>
    </>
  )
}

export default Account