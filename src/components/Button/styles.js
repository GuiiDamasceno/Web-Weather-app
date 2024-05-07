import styled from "styled-components";

export const Container = styled.button`
    outline: none;
    border: none;
    width: 60%;
    font-weight: 700;
    border-radius: 25px;
    padding: 10px;
    background: ${({ theme, $isactive }) => $isactive ? theme.COLORS.BLUE_300 : theme.COLORS.BLUE_200};
    color: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 0 5px 15px ${({ theme }) => theme.COLORS.SHADOW_BLACK};
    transition: all 0.3s ease;
`