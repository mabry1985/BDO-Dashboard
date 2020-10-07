import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { Storage } from './types';

import barterItemData from './barterItems.json';

const GlobalStyle = createGlobalStyle`
  body {
    background: #5a5a5a;
  }
`;

interface AppState {
  storage: Storage;
}

class App extends Component<{}, AppState> {
  constructor (props: {}) {
    super(props)

    this.state = {
      storage: {
        ["Velia", ]
      }
       
    }
  }

  componentDidMount = () => {

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
