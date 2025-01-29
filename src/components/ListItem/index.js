/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './styles.css';

const ListItem = ({ item }) => {
    return (
        <div className="list-item">
            <div className="names">
                <span className="common-name">{item.common_name}</span>
                <span className="scientific-name">{item.scientific_name}</span>
            </div>
        </div>
    );
};

export default ListItem;