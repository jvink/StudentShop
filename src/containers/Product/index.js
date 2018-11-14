import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import productActionCreator from '../../store/actionCreators/product';
import ProductHeader from '../../components/ProductHeader';
import ProductItem from '../../components/ProductItem';
import '../../styles/product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            productData: {
                category: this.props.match ? this.props.match.params.category : null,
                subcategory: this.props.match ? this.props.match.params.subcategory : null
            }
        };
    }

    componentWillMount() {
        this.props.productActions.getProducts(this.state.category, this.state.subcategory);
    }

    render() {
        if (this.props.productStore.getProductsResult) {
            return (
                <div style={{width:"100%"}}>
                    <div className="productHeader">
                        <ProductHeader productHeaderData={this.state.productData}/>
                    </div>
                    {this.renderDisplay()}
                </div>
            );
        } else if (this.props.productStore.isGettingProducts) {
            return <p>Loading..</p>
        } else if (this.props.productStore.productsError) {
            return <p>Could not receive products</p>
        } else {
            return <p>400</p>
        }
    }

    renderDisplay() {
        const { display } = this.props;
        switch (display) {
            case "column":
                return this.columnDisplay();
            case "horizontal":
                return this.horizontalDisplay();
            default:
                return this.columnDisplay();
        }
    }

    columnDisplay() {
        let products = this.props.productStore.getProductsResult;

        return (
            <div className='productContainer'>
                {products.map((p) => {
                    return (
                        <div key={p.product.id} className="column">
                            <ProductItem display={this.props.display} productItemData={p.product}/>
                        </div>
                    );
                })}
            </div>
        );
    }

    horizontalDisplay() {
        let products = this.props.productStore.getProductsResult;
        return (
            <div className='productContainerHorizontal'>
                {products.map((product) => {
                    product.imgUrl = "http://s15858.pcdn.co/wp-content/uploads/2018/09/lead-John-Cena.jpg";
                    return (
                        <div>
                            <div key={product.id} className="horizontal">
                                <ProductItem display={this.props.display} productItemData={product}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        productStore: state.product
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch)
    })
  )(Product));