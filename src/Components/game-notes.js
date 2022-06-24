import './game-notes.css';
//import { Button } from '@mui/material';

const GameNotes = ({toggleNotes}) => {

    const handleClose = () => {
        toggleNotes();
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <div className='content-list'><h2>Test</h2></div>
                <div className='content-list'><h2>Test</h2></div>
                <div className='content-list'><h2>Test</h2></div>
                <div className='content-list'>
                    <button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameNotes;