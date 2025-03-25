import React, { useEffect, useState } from 'react';
import { candidates } from '../data'; 
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../store/ui-slice';

const ConfirmVote = () => {
    const [modalCandidate, setModalCandidate] = useState(null);

    const dispatch = useDispatch();

    const closeCandidateModal = () => {
        dispatch(UiActions.closeVoteCandidateModal());
    };

    // ✅ FIXED: Correct Redux state property
    const selectedVoteCandidate = useSelector(state => state.vote.selectedVoteCandidate);
    
    const fetchCandidate = () => {
        console.log("Searching Candidate with ID:", selectedVoteCandidate);
        if (!selectedVoteCandidate) return; // Avoids running when undefined
        const foundCandidate = candidates.find(candidate => candidate.id == selectedVoteCandidate);
        if (foundCandidate) {
            setModalCandidate(foundCandidate);
        }
    };

    // ✅ FIXED: Runs every time Redux state updates
    useEffect(() => {
        fetchCandidate();
    }, [selectedVoteCandidate]); 

    return (
        <section className='modal'>
            <div className="modal__content__vote-content">
                <h5>Please Confirm your vote</h5>

                {modalCandidate ? (
                    <>
                        <div className='confirm__vote'>
                            <img src={modalCandidate.image} alt={modalCandidate.fullname} />
                        </div>
                        <h2>{modalCandidate.fullname}</h2>
                        <p>{modalCandidate.motto}</p>
                    </>
                ) : (
                    <p>Loading candidate...</p>
                )}

                <div className="confirm__vote-cta">
                    <button className="btn" onClick={closeCandidateModal}>Cancel</button>
                    <button className="btn primary">Confirm</button>
                </div>
            </div>
        </section>
    );
};

export default ConfirmVote;