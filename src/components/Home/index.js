import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/AddShoppingCart';
var json = require('../../mock.json');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.setState({data: json});
  }

  render() {
    const listItems = this.state.data.map((d) =>
    <GridListTile key={d.id} cols={d.cols || 1}>
      <img src={d.imgUrl} alt={d.name}/>
      <GridListTileBar
        title={d.name}
        subtitle={<span>for: {d.price}</span>}
        actionIcon={
          <IconButton>
            <InfoIcon style={{color: 'white'}}/>
          </IconButton>
        }
      />
    </GridListTile>
    );
    return (
      <div style={{margin: 'auto', maxWidth: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overflow: 'hidden'}}>
        <GridList cellHeight={240} cols={4}>
          {listItems}
        </GridList>
      </div>
    );
  }
}

export default Home;