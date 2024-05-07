import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button:hover, a:hover {
    filter: brightness(.9);
  }

  input{
    font-family: 'Poppins', sans-serif; 
  }
`