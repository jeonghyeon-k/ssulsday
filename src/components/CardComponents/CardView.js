import React, { useState } from 'react';
import { MdFavorite,MdFavoriteBorder,MdVisibility, MdSms} from 'react-icons/md';
import classNames from 'classnames';
import './Card.scss'

function CardView ({type}){
    
    const [done, setDone] = useState(true);
    const onClick = () => setDone(!done);

    return(
    <div className="card_container">
        <div className="card_head">
            <div className="card_title">첫번째 고백썰</div>
            <div className="card_commentcount">10</div>
            <button className="card_commentbutton">
                <MdSms size="1.5em"/>
            </button>
        </div>
        {type ?
            null : <div className="card_content">
            고민 많이 했는데. 결국 고백했다. 고백 장소 결과는 기록하고 싶어서 몇자 남긴다~~ 다른 사람들에게 고민 많이 했는데. 결국 고백했다. 
        </div>
        }

        <div className={classNames("card_hashtag",type)}>#우울#고백실패#그래도추억#괜찮아</div>
        
        <div className={classNames("card_bottom", type)}>
            {type ?
                <hr className="hr"/> : null
            }
            <div className="card_date">2019.09.08</div>
            <div className="card_bottom_box">
                <div className="card_conut">256</div>
                <div className="card_button">  
                    <MdVisibility />
                </div> 
                <div className="card_conut">428</div>  
                <button className={classNames("card_button", done)} onClick={onClick}>
                    {done ? (
                    <MdFavoriteBorder />
                    ):
                    <MdFavorite color="red"/>}
                </button>
            </div>
        </div>
    </div>
    )
}

export default CardView;