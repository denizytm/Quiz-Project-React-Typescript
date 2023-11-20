
import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/nattu-adnan-unsplash.jpg'

export const GlobalStyle = createGlobalStyle`

    html {  
        height: 100%;
    }

    body {
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        background: url(${BGImage});
    }

    *{
        box-sizing: border-box;
        font-family : 'Catamaran' , sans-serif;
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

    h1{
        color :transparent ;
        font-size: 70px;
        background-image: linear-gradient(180deg , white , #87f1ff);
        background-clip: text;
        -webkit-background-clip: text;
        filter: drop-shadow(2px 2px #0085a3);
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 400;
    }

    .next , .start {
        margin-top: 20px;
        width: 50%;
        background: linear-gradient(180deg,white,orange);
        border-radius: 10px;
        border: 2px solid orangered;
        font-size: 16px;
        cursor: pointer;
    }

`
