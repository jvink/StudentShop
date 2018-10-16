import React, { Component } from 'react';
import '../../styles/header.css';

class CategoryHeader extends Component {
    render() {
        const categories = [{categoryName: 'Category 1', categoryLink: '/bezorging'}, {categoryName: 'Categorie 2', categoryLink: '/bezorging'}, {categoryName: 'Category 3', categoryLink: '/bezorging'}, {categoryName: 'Category 4', categoryLink: '/bezorging'}];
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