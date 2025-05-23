import React from 'react'
import GithubApi from './Components/GithubApi'

const App = () => {
  return (
    <React.Fragment>
       <h1 className='text-violet-400 font-semibold text-center text-4xl my-[24px]'>GitHub Username Search </h1>
      <GithubApi/>
    </React.Fragment>
  )
}

export default App;