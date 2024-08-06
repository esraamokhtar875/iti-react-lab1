
import React from 'react';
import'./Proto.css';
import CardList from '../components/CardList';

const cards = [
          {index:1 , content:'Card1'},
          {index:2 , content:'Card2'},
          {index:3 , content:'Card3'},
          {index:4 , content:'Card4'},
          {index:5 , content:'Card5'},
          {index:6 , content:'Card6'},
];
 

 const Proto= ()=> {
    return(
        <>
        <div className='all'>
            <h1 className='pro'> Protflio </h1>
            <div className="cardslist">
                <CardList 
                cards={cards}
                evenColor = "rgb(63, 62, 62)"
                oddColor = "rgb(119, 116, 116)" 
                />
                </div>
            </div>
            </>
        )};


        export default Proto;
