
import { QuestionType , Question } from "../API"
import { Wrapper , BottomWrapper } from "./QuestionContainer.style"

type QuestionProps = {
    correct_answer : string
    question : string
    answers : string[]
    callback : (e : React.MouseEvent<HTMLButtonElement>)=> void
    number : number
    totalNum : number
    userAnswers : string[]
}

const QuestionContainer = ({
    correct_answer,
    question,
    answers,
    callback,
    number,
    totalNum,
    userAnswers
} : QuestionProps) => {

    return (
        <Wrapper>
            <p>Question : {number} / {totalNum}</p>
            <p dangerouslySetInnerHTML={{__html : question}} ></p>
                {answers && answers.map((answer)=>{
                    return (
                        <BottomWrapper
                          answer={answer}
                          isCorrect={answer === correct_answer}
                          userAnswer={userAnswers.length === number ? userAnswers[number-1] : undefined}
                          userClicked={(userAnswers.length === number) ? true : false}
                          key={answer} 
                        >
                            <button disabled={(userAnswers.length === number) ? true : false} dangerouslySetInnerHTML={{__html : answer}} value={answer} onClick={callback} ></button>

                        </BottomWrapper>
                    )
                })}
        </Wrapper>
    )
}

export default QuestionContainer