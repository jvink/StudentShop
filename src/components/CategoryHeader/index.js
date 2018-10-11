import React, { Component } from 'react';
import '../../styles/header.css';

class CategoryHeader extends Component {
    render() {
        const categories = [
            {categoryName: 'Bezorging', categoryLink: '/bezorging'},
            {categoryName: 'Bezorging', categoryLink: '/bezorging'},
            {categoryName: 'Bezorging', categoryLink: '/bezorging'},
            {categoryName: 'Bezorging', categoryLink: '/bezorging'}
        ];
        
        return (
        <div className="wrapperSubHeader">
            <div className="subHeaderItemsWrapper">
                {categories.map((categorie) => {
                    return (
                        <div className="categoryWrapper">
                            <div className="category">{categorie.categoryName}</div>
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