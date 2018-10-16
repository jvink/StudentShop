import React, { Component } from 'react';
import '../../styles/header.css';

class CategoryHeader extends Component {
    render() {
        const categories = [
            {categoryName: "Agenda's", categoryLink: '/agendas'},
            {categoryName: "Boeken", categoryLink: '/boeken'},
            {categoryName: "Schoolspullen", categoryLink: '/schoolspullen'},
            {categoryName: "Tassen", categoryLink: '/tassen'},
            {categoryName: "Kleding", categoryLink: '/kleding'},
            {categoryName: "Laptops en accessoires", categoryLink: '/laptops'}
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