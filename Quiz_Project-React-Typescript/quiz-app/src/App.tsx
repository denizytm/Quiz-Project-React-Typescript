import React , {useState , useEffect, MouseEventHandler} from 'react'

//Components
import QuestionContainer from './components/QuestionContainer'
//Types and Other
import { QuestionType , Question , QuestionData , getQuestions , shuffleAnswers } from './API'
import { Wrapper , GlobalStyle } from './App.style'

const TOTAL_AMOUNT = 10

const App=() : JSX.Element => {

  const [gameOver,setGameOver] = useState<Boolean>(true)
  const [loading,setLoading] = useState(false)
  const [number,setNumber] = useState<number>(0)
  const [score,setScore] = useState<number>(0)
  const [questions,setQuestions] = useState<QuestionData[]>([])
  const [userAnswers,setUserAnswers] = useState<string[]>([])

  const startQuiz = async()=>{
    if(gameOver){
      setLoading(true)
      setNumber(0)
      setQuestions([])
      setScore(0)
      setUserAnswers([])
      setGameOver(false)

      const data = await getQuestions({Amount : TOTAL_AMOUNT,Difficulty : 'easy'})

      data.forEach(async(question : Question)=>{
        let tempArray = [question.correct_answer,...question.incorrect_answers]
        setQuestions(old=>[...old,{...question,answers : shuffleAnswers(tempArray)}])
      })

      setLoading(false)

    }
  }

  const nextQuestion = ()=>{
    setNumber(n=>n+1)
  }

  const handleAnswer = (e : React.MouseEvent<HTMLButtonElement>) =>{
    const answer = e.currentTarget.value

    const correct = answer === questions[number].correct_answer

    if(correct && !gameOver)  setScore(v=>v+1)

    if (!gameOver) setUserAnswers(old=>[...old,answer])

  }

  useEffect(()=>{
    if(userAnswers.length === TOTAL_AMOUNT)
    setGameOver(true)
  },[userAnswers])

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>REACT QUIZ</h1>
      {gameOver && <button 
        className="start"
        onClick={startQuiz}
      >
        Start
      </button> }
      <p>Score : {score}</p>
      {loading && <p>Questions Loading...</p>}
      {!loading && questions && questions[number] &&
      <QuestionContainer
        question={questions[number].question}
        correct_answer={questions[number].correct_answer}
        answers={questions[number].answers}
        callback={handleAnswer}
        number={number+1}
        totalNum={TOTAL_AMOUNT}
        userAnswers={userAnswers}
      />}
      {(userAnswers.length === number + 1) && (userAnswers.length !== TOTAL_AMOUNT) &&
        <button className='next' 
         onClick={nextQuestion}
        >
          Next Question
        </button>
       }
    </Wrapper>
    </>
  );
}

export default App;
