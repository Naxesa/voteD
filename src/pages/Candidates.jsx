import React from 'react';
import { useParams } from 'react-router-dom';
import { candidates as dummyData } from '../data';
import Candidate from "../components/Candidate";

function Candidates() {
  const { id } = useParams();

  const candidates = dummyData.filter(candidate => candidate.election === id);

  return (
    <section className="candidates">
      <header className="candidates__header">
        <h1>Vote your candidate</h1>
        <p>
          These are the candidates for the selected election. Vote once and wisely, 
          because you won't be able to vote again.
        </p>
      </header>
      <div className="container candidates__container">
        {candidates.map(candidate => (
          <Candidate key={candidate.id} {...candidate} />
        ))}
      </div>
    </section>
  );
}

export default Candidates;
