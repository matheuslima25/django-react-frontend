import React from 'react';
import Item from '../Item';

export default function List(props) {
    return (
        <div>
            <h2>{ props.listName }</h2>
            <ul>
                <Item name={'Meu item'}/>
            </ul>
        </div>
    )
}