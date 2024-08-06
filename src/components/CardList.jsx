import React from 'react';

const CardList = ({ cards , evenColor ,oddColor})=>{
    return(
        <div>
            {cards.map((card,index)=>(
                <div style={index%2===0? {backgroundColor: evenColor} : {backgroundColor: oddColor}} >
                    {card.content}
                </div>
            ))}
        </div>
    )
}

export default CardList;