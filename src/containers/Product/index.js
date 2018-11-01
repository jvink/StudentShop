import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        this.props.productActions.getProduct(this.state.category, this.state.subcategory);
    }

    render() {
        let products = this.props.productStore.getProductResult;
        
        return (products) ? (
            <div>
                <div className="productHeader">
                    <ProductHeader productHeaderData={this.state.productData}/>
                </div>
                {/* <p>{this.state.category ? 'Category: ' + this.state.category : ''}</p>
                <p>{this.state.subcategory ? 'Subcategory: ' + this.state.subcategory : ''}</p> */}
                <div className='productContainer'>
                    {products.map((product) => {
                        product.imgUrl = "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0";
                        return (
                            <div key={product.id} className="column">
                                <ProductItem productItemData={product}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        ) : <p>Loading..</p>
    }
}

export default connect(
    (state) => ({
        productStore: state.product
    }),
    (dispatch) => ({
        productActions: productActionCreator(dispatch)
    })
  )(Product);