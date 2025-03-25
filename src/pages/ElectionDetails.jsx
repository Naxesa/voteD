import React from 'react'
import {candidates,voters, elections as dummyData} from '../data'
import { useParams } from 'react-router-dom'
import ElectionCandidate from '../components/ElectionCandidate'

const ElectionDetails = () => {


  const {id} = useParams()
  const currentElection = dummyData.find(election => election.id)

  const electionCandidates = candidates.filter(candidate => candidate.election === id)



  return (
    <section className="electiondetails">
      <div className="container electiondetails__container">
        <h2>{currentElection.title}</h2>
        <p>{currentElection.description}</p>
        <div className="electiondetails__image">
          <img src={currentElection.thumbnail} alt={currentElection.title} />
        </div>
        <menu className="electiondetails__candidates">
          {
            electionCandidates.map(candidate => <ElectionCandidate key={candidate.id} {...candidate} />)
          }
        </menu>
        <menu className="voters">
          <h2>Voters</h2>
          <table className="voters__table">
            <thead>
              <tr>
                <th>Fullname</th>
                <th>Email Address</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {
                voters.map(voter => <tr key={voter.id}>
                  <td><h5>{voter.fullname}</h5></td>
                  <td>{voter.email}</td>
                  <td>08:09:45</td>
                </tr>)
              }
            </tbody>
          </table>
        </menu>
      </div>
    </section>
  )
}

export default ElectionDetails