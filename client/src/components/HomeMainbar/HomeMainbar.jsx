import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import Questions from './Questions'
import QuestionList from './QuestionList'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {
    const questionList = useSelector(state => state.questionReducer)
    // console.log(questionList)
  // var questionList =[{

  //   _id:'1',
  //   upVotes:3,
  //   downVotes:0,
  //   noOfAnswers:4,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be ",
  //   questionTags:["java","node js","react js","mongo db"],
  //   userPosted:"mano",
  //   askedOn:"jan 1",
  //   userId:1,
  //   answer:[{
  //       answerBody:"Answer",
  //       userAnswered:'Kumar',
  //       answeredOn:"jan 2",
  //       userId:1
        

  //   }

  //   ]



  // },
  // {
  //   _id:'2',
  //   upVotes:0,
  //   downVotes:0,
  //   noOfAnswers:0,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags:["javascript","R","python"],
  //   userPosted:"mano",
  //   askedOn:"jan 1",
  //   userId:2,
  //   answer:[{
  //       answerBody:"Answer",
  //       userAnswered:'Kumar',
  //       answeredOn:"jan 2",
  //       userId:2,


  //   }

  //   ]

  // },
  // {

  //   _id:'3',
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers:0,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags:["javascript","R","python"],
  //   userPosted:"mano",
  //   askedOn:"jan 1",
  //   userId:3,
  //   answer:[{
  //       answerBody:"Answer",
  //       userAnswered:'Kumar',
  //       answeredOn:"jan 2",
  //       userId:3,
        

  //   }

  //   ]

  // }]
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()
  const checkAuth =()=> {
      if(user===null){

        alert("login or signup to ask a question");
        navigate('/Auth')

      }else{
        navigate('/AskQuestion')
      }
      
    
  }
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname ==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>

        }
        <button  onClick={checkAuth} className='ask-btn'>Ask Question</button>

      </div>
      <div >
        {
          questionList.data === null ? <h1>Loading...</h1> : 
          <><p>{questionList.data.length} questions</p>
          <QuestionList questionList={questionList.data}/>
          
            
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainbar
