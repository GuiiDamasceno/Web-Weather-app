import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px 420px;
  grid-template-rows: 80px;
  grid-template-areas:
  "leftside modebtn" 
  "leftside info"
  "leftside nextday"
  "leftside text"
  "leftside search";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 25px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.COLORS.SHADOW_BLACK};
`

export const LeftContent = styled.div`
  display: grid;
  grid-area: leftside;

  border-radius: 25px;
`

export const ModeButton = styled.div`
  grid-area: modebtn;
  display: flex;
  gap: 20px;
  
  padding: 20px 40px;
  width: 100%;

  >button{
    float: right;
  }

`

export const ListContent = styled.div`
  grid-area: nextday;

  display: flex;

  justify-content: center;
  align-items: center;
`

export const SearchButton = styled.button`
  grid-area: search;

  background: transparent;
  border: none;
  padding: 20px 0 10px;
`