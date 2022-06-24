import './game-notes.css';
//import { Button } from '@mui/material';

const GameNotes = ({toggleNotes}) => {

    const handleClose = () => {
        toggleNotes();
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <div className='content-list'>
                    <h2>How to Play</h2>
                </div>
                <div className='content-list'>
                    <h2>Your Craft</h2>
                    <span>pilot your ship with the arrow keys.</span>
                </div>
                <div className='content-list'>
                    <h2>Operate Plasma Cannon</h2>
                    <span>fire plasma cannon with s key.</span>
                </div>
                <div className='content-list'>
                    <h2>Items</h2>
                    <span>destroy item robots to pick up items that can be used for limited time.</span>
                </div>
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