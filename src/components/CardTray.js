import React from 'react';
import Card from './Card';

const CardTray = ({cardArray}) => {
    return (
        <div>
            {
                cardArray.map((user, i) => {
                    return (
                        <Card
                        key={cardArray[i].id}
                        id={cardArray[i].id}
                        name={cardArray[i].name}
                        email={cardArray[i].email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardTray;