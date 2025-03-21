import React, { useState, useEffect } from 'react';
import { candidates } from '../data';
import CandidateRating from './CandidateRating';
import { Link } from 'react-router-dom';

const ResultsElection = ({ id, thumbnail, title }) => {
  const [totalVotes, setTotalVotes] = useState(0);

  // Get candidates for the selected election
  const electionCandidates = candidates.filter(candidate => candidate.election === id);

  // Calculate total votes dynamically
  useEffect(() => {
    const total = electionCandidates.reduce((sum, candidate) => sum + candidate.voteCount, 0);
    setTotalVotes(total);
  }, [electionCandidates]);

  return (
    <section className="result">
      {/* Header Section */}
      <header className="result__header">
        <h4>{title}</h4>
        <div className="result__header-image">
          <img src={thumbnail} alt={title} />
        </div>
      </header>

      {/* Candidates List */}
      <ul className="result__list">
        {electionCandidates.map(candidate => (
          <CandidateRating key={candidate.id} {...candidate} totalVotes={totalVotes} />
        ))}
      </ul>

      {/* Navigation Button */}
      <Link to={`/elections/${id}/candidates`} className="btn-primary full">
        Enter Election
      </Link>
    </section>
  );
};

export default ResultsElection;
