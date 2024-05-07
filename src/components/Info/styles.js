import styled from "styled-components"

export const Container = styled.div`
  grid-area: info;

  padding:0 35px 0;
  display: flex;
  flex-direction: column;

  .day-info div:not(:last-child){
    margin-bottom: 6px;
  }

  .day-info div .title{
      font-weight: 700;
  }

  .day-info div .pressure, .humidity, .wind{
      float: right;
  }
`