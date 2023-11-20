
export type QuestionType = {
    Difficulty : 'hard' | 'medium' | 'easy'
    Amount : number
}

export interface Question {
    category : string
    type : string
    difficulty : string
    question : string
    correct_answer : string
    incorrect_answers : string[]
}

export type QuestionData = Question & {
    answers : string[]
}

export const shuffleAnswers = (array : string[])=>(
    [...array].sort(()=>Math.random() -  0.6)
)

export const getQuestions = async ({Amount,Difficulty} : QuestionType)=> {
    const endPoint = `https://opentdb.com/api.php?amount=${Amount}&difficulty=${Difficulty}&type=multiple`
    const data = await (await fetch(endPoint)).json()
    return data.results.map((question : Question)=> (
        {
            ...question,
            answers : shuffleAnswers([
                ...question.incorrect_answers,
                question.correct_answer
            ])
        }
    ))
}
