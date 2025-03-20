import React, { useState } from 'react'
import {candidates} from '../data'
import CandidateRating from './CandidateRating'

const ResultsElection = ({id, thumbnail, title}) => {

    const [totalVotes, setTotalVotes] = useState(544)

    const electionCandidates = candidates.filter(candidate => {
        return candidate.election == id 
    })


  return (
    <section className='result'>
        <header className='result__header'>
            <h4>{title}</h4>
            <div className='result__header-image'>
                <img src={thumbnail} alt={title} />
            </div>
        </header>
        <ul className='result__list'>
                {
                   electionCandidates.map(candidate => <CandidateRating key={candidate.id} {...candidate}  totalVotes={totalVotes} />)
                }
        </ul>
    </section>
  )
}

export default ResultsElection