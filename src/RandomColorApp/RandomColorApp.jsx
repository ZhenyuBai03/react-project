import { useEffect, useState } from 'react';
import './RandomColor.css';
import StarRating from '../components/StarRating';
import QRCodeApp from '../components/QRCodeApp';
import GithubProfileFinder from '../components/GithubProfileFinder';
import TicTacToe from '../components/TicTacToe';

export default function RandomColorApp() {

    const [isHex, setIsHex] = useState(true);
    const [color, setColor] = useState('#6653BA');

    function randomUtility(length) {
        return Math.floor(Math.random() * length);
    }

    const handleColorType = () => {
        console.log(isHex);
        setIsHex((currentState) => !currentState);
        handleRandomColor();
    }

    function handleRandomColor() {
        if (isHex) {
            const hex = '0123456789ABCDEF';
            let hexColor = '#';
            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomUtility(hex.length)];
            }
            setColor(hexColor);
        } else {
            let rgbColor = `rgb(${randomUtility(256)}, ${randomUtility(256)}, ${randomUtility(256)})`;
            setColor(rgbColor);
        }
    }

    return (
        <div 
            className="container" 
            style={{
                backgroundColor: color,
            }}>
            <div className='inner-block'>
                <div className='header-button'>
                    <button onClick={handleColorType} className='buttom-85'>Create {isHex?"rgb":"hex"} Color</button>
                    <button onClick={handleRandomColor}>Generate Random Color</button>
                </div>
            </div>
            <div className='inner-block display-text'>
                <h3>{isHex?"Hex Color":"rgb Color"}</h3>
                <h1>{color}</h1>
            </div>
            <div className="app-row">
                <QRCodeApp bgColor={color}/>
                <GithubProfileFinder/>
                <TicTacToe/>
            </div>
        </div>
    );
}