import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BarterItem } from './types';

import barterItemData from './barterItems.json';

const GlobalStyle = createGlobalStyle`
  body {
    background: #5a5a5a;
  }
`;

type AppState = {
  barterItems: BarterItem[];
}

class App extends Component<{}, AppState> {
  constructor (props: {}) {
    super(props)

    this.state = {
      barterItems: [], 
    }
  }

  componentDidMount = () => {
    const barterItemsCopy: BarterItem[] = [];
   // barterItemData.items.map(barterItem => console.log(barterItem));
    barterItemData.items.map(barterItem => barterItemsCopy.push(barterItem));
    this.setState({ barterItems: barterItemsCopy }, 
      () => console.log(this.state.barterItems))
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
          <div>
            <h1>BDO Dashboard</h1>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
