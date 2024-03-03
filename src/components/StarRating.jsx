import {FaStar} from 'react-icons/fa';
import {useState, useEffect} from 'react';

export default function StarRating({NumOfStars = 5, target}) {
    const [hover, setHover] = useState(0);
    const [ratingList, setRatingList] = useState(()=>{
        const saved = localStorage.getItem('ratingList');
        if (saved) {
            return JSON.parse(saved);
        } else {
            return {};
        }
    });
    const [rating, setRating] = useState(ratingList[target] || 0);

    useEffect(() => {
            setRating(ratingList[target] || 0);
        }, [ratingList, target]);
    console.log(rating)
    
    function handleHover(index) {
        setHover(index);
    }

    function handleLeave(index) {
        setHover(0);
    }

    function handleClick(index) {
        setRating(index);
    }

    function handleSubmit() {
        setRatingList({...ratingList, [target]: rating});
        localStorage.setItem('ratingList', JSON.stringify(ratingList));
    }

    return (
        <div className='StarRating'>
            {[...Array(NumOfStars)].map((star, i) => (
                <FaStar 
                key={i}
                size={50}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => handleLeave(i)}
                onClick={() => handleClick(i)}
                style = {{
                    color: i <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                }}
                />
            ))}
            <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{display: "flex", justifyContent: "center"}}>prev rating: {ratingList[target]+1 || 1}</span>
                <button style={{fontWeight: "600"}} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}