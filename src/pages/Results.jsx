import React, { useState } from 'react'
import {elections as dummyData} from '../data'
import ResultsElection from '../components/ResultsElection'


const Results = () => {

  const [elections, setElections] = useState(dummyData)



  return (
    <section>
      <div className='container results__container'>
        {
          elections.map(election => <ResultsElection key={election.id} {...election} />)
        }
      </div>
    </section>
  )
}

export default Results