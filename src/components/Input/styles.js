import styled from "styled-components";

export const Container = styled.div`
  grid-area: text;
  
  height: 46px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin: 20px 35px -12px;
  border-radius: 10px;

  >input{
    height: 46px;
    width: 100%;

    padding: 0 46px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    border-radius: 10px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700}
    }
  }

  >svg{
    margin-left: 16px;
    position: absolute;
  }
`