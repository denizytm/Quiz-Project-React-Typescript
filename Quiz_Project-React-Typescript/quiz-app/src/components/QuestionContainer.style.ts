import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;    
`

type ButtonWrapperProps = {
    userAnswer : string | undefined
    answer : string | undefined
    isCorrect : boolean
    userClicked : boolean
}

export const BottomWrapper = styled.div<ButtonWrapperProps>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-top: 10px;

    button {
        width: 100%;
        border-radius: 10px;
        border: 2px solid white;
        background: ${({userAnswer,answer,isCorrect,userClicked})=>
            userClicked && isCorrect ? 'linear-gradient(90deg,#56ffa4,#59bc86)'
            : !isCorrect && userClicked && (userAnswer === answer) ? `linear-gradient(90deg,#ff5656,#c16868)` 
            : `linear-gradient(90deg,#56ccff,#6eafb4)`         
        } ;
        color: white;
        padding: 10px;
        cursor: pointer;
    }

`