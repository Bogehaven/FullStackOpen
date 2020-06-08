import React from 'react'
import ReactDOM from 'react-dom'

//  Refactor the code so that it consists of three new components: 
// Header, Content, and Total. All data still resides in the App component, 
// which passes the necessary data to each component using props. 
// Header takes care of rendering the name of the course, 
// Content renders the parts and their number of exercises and 
// Total renders the total number of exercises.

const Header = (props) => (
  <h1>{props.name.name}</h1>
)

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Content = (props) => {
  const [part1, part2, part3] = props.name.parts
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part3.name} exercises={part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  const [e1, e2, e3] = props.name.parts

  return (
    <div>
      <p>Number of exercises {e1.exercises + e2.exercises + e3.exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header name={course} />
      <Content name={course} />
      <Total name={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))