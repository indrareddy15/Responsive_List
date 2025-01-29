/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ListItem from '../ListItem';
import './styles.css';

const ListContainer = ({ list, onSelect }) => {
    return (
        <div className={`list-container ${list.isSelected ? 'selected' : ''}`}>
            <h3>{list.name}</h3>
            <div className="items-list">
                {list.items.map(item => (
                    <ListItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ListContainer;