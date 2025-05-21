import React from 'react'
import GithubApi from './assets/Components/GithubApi'

const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold text-center text-cyan-800 my-4">
         GITHUB API SEARCH 
      </h1>
      <GithubApi/>
    </React.Fragment>
  )
}

export default App