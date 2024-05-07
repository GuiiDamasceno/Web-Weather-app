import styled from "styled-components";

export const Container = styled.div`

  >.days-list{
    grid-area: nextday;

    display: flex;
    box-shadow: 0 5px 5px ${({ theme }) => theme.COLORS.SHADOW_BLACK};
    border-radius: 10px;
    
  }

  >.days-list li{
    padding: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    transition: all .3s ease;

    >.day-temp{
      font-weight: 700;
    }
  }

  span:nth-child(2){
    margin-top: 10px;
    font-size: 40px;
  }

  >.days-list li:hover{
    transform: scale(1.1);
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    box-shadow: 0 5px 15px ${({ theme }) => theme.COLORS.SHADOW_BLACK};
  }
`

