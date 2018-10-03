import React, { Component } from 'react';
import '../../styles/header.css';

class CategoryHeader extends Component {
    render() {
        const categories = ['Bezorging', 'Catering', 'Computers', 'Kunst', 'Sport', 'Tuin', 'Verhuizen', 'Verzorging'];
        return (
        <div className="wrapper">
            <div className="itemsWrapper">
                {categories.map((categorie) => {
                    return (
                        <div className="categoryWrapper">
                            <div className="category">{categorie}</div>
                            <div className="categoryDivider">|</div>
                        </div>
                    );
                })}
            </div>
        </div>
        );
    }
}

export default CategoryHeader;