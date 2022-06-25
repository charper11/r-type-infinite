import './game-notes.css';
//import { Button } from '@mui/material';

const GameNotes = ({toggleNotes}) => {

    const handleClose = () => {
        toggleNotes();
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <div className='closeBtn'>
                    <button className='button'
                        onClick={handleClose}>
                        Close
                    </button>
                </div>
                <div className='title'>
                    <h2>How to Play</h2>
                </div>
                <div className='table'>
                    <div className='cell'>
                        <div className='infoRow'>
                            <h3 className='title'>Your Craft</h3>
                            <img src="DisplayImages/craft.png"/>
                            <h3 className='title'>Force</h3>
                            <img src="DisplayImages/forceImg.png"/>
                        </div>
                        <li>pilot your ship with the arrow keys</li>
                        <li>force is indestructible diamond armor with multiple weapon capability</li>
                        <h3 className='title'>Operate Plasma Cannon</h3>
                        <li>fire plasma cannon with <b>s</b> key.</li>
                        <li>Hold <b>s</b> key to accumulate plasma beam energy (indicated by meter)</li>
                        <li>Release key to fire a powerful stored energy plasma beam</li>
                    </div>
                    <div className='cell'>
                        <h3 className='title item-title'>Items</h3>
                        <p>destroy item robots to pick up items that can be used for limited time</p>
                        <div className='items'>
                            <div className='infoRow'>
                                <img src="DisplayImages/shieldImgx2.png"/>
                                <span>diamond shield</span>
                            </div>
                            <div className='infoRow'>
                                <img src="DisplayImages/item.png"/>
                                <span>weapon upgrade</span>
                            </div>
                            <div className='infoRow'>
                                <img src="DisplayImages/speedImg.png"/>
                                <span>speed boost</span>
                            </div>
                        </div>
                        <div className='items item-title'>
                            <img src="DisplayImages/itemRobot.png"/>
                            <p>item robot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameNotes;