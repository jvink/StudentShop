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
                            <div class="categoryDropdown">
                                <button class="categoryButton">
                                    <div className="categoryName">{category.categoryName}</div>
                                </button>
                                <div class="subCategoryWrapper">
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