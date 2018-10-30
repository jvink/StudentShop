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
                            <div key={category.categoryLink} className="categoryDropdown">
                                <button className="categoryButton">
                                    <div className="categoryName">{category.categoryName}</div>
                                </button>
                                <div className="subCategoryWrapper">
                                    {category.subCategories.map((subCategory) => {
                                        return (
                                            <a key={subCategory.subCategoryLink} href={category.categoryLink + subCategory.subCategoryLink}>{subCategory.subCategoryName}</a>
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