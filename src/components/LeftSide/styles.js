import styled from "styled-components";

export const Container = styled.div`
  .left-info {
    display: grid;
    grid-area: leftside;

    padding: 50px 0; 
    border-radius: 25px;

    text-align: center;

    background: url('https://source.unsplash.com/1600x900/?city');
    background-position: center;
    background-size: cover;

    transform: scale(1.01) perspective(200px);
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }


  .pic-gradient{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(135deg, #5c6bc0 10%, #0d47a1 100%);
      border-radius: 25px;
      opacity: 0.4;
  }

  .today-info{
    z-index: 10;

    >.city-info{
      display: flex;
      align-items: center;
      justify-content: center;
      gap:5px;
      font-size: 14px;

      >i{
        font-size: 20px;
      }
    }
  }

  .today-weather {
    margin-top: 180px;

    >img{
      height: 70px;
    }

    >span{
      font-size: 70px;
    }
  }
`