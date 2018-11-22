import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

class CategoryHeader extends Component {
    render() {
        const categoryUrl = "/category/",
        { data } = this.props;

        if (data) {
            return (
                <div className="wrapperSubHeader">
                    <div className="subHeaderItemsWrapper">
                        {data.map((r) => {
                            return (
                                <div key={r.category.id} className="categoryDropdown">
                                    <button className="categoryButton">
                                        <div className="categoryNameWrapper"><Link className="categoryName" to={categoryUrl + r.category.id}>{r.category.name}</Link></div>
                                    </button>
                                    <div className="subCategoryWrapper">
                                        {r.subCategory.map((s) => {
                                            return (
                                                <Link key={s.id} to={categoryUrl + r.category.id + "/" + s.id}>{s.subCategory_Name}</Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <p>Loading...</p>
            );
        }
    }
}

export default CategoryHeader;