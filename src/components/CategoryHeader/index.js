import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';
var categories = require('../../categories.json');

class CategoryHeader extends Component {
    render() {
        const categoryUrl = "/category";
        return (
            <div className="wrapperSubHeader">
                <div className="subHeaderItemsWrapper">
                    {categories.map((category) => {
                        return (
                            <div key={category.categoryLink} className="categoryDropdown">
                                <button className="categoryButton">
                                    <div className="categoryNameWrapper"><Link className="categoryName" to={categoryUrl + category.categoryLink}>{category.categoryName}</Link></div>
                                </button>
                                <div className="subCategoryWrapper">
                                    {category.subCategories.map((subCategory) => {
                                        return (
                                            <Link key={subCategory.subCategoryLink} to={categoryUrl + category.categoryLink + subCategory.subCategoryLink}>{subCategory.subCategoryName}</Link>
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