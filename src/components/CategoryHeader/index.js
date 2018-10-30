import React, { Component } from 'react';
import '../../styles/header.css';
var categories = require('../../categories.json');

class CategoryHeader extends Component {
    render() {
        return (
            <div className="wrapperSubHeader">
                <div className="subHeaderItemsWrapper">
                    {categories.map((category) => {
                        return (
                            <div class="dropdown">
                                <button class="dropbtn">
                                    <div className="categoryName">{category.categoryName}</div>
                                </button>
                                <div class="dropdown-content">
                                    {category.subCategories.map((subCategory) => {
                                        return (
                                            <a href={category.categoryLink + subCategory.subCategoryLink}>{subCategory.subCategoryName}</a>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CategoryHeader;