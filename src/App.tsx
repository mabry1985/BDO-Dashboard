import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import barterItemData from './barterItems.json';
import { Storage } from './types';
import Inventory from './Components/Inventory';

const GlobalStyle = createGlobalStyle`
  body {
    background: #5a5a5a;
  }
`;

interface AppState {
  cities: string[],
  currentCity: string;
  storage: Storage[],
}

class App extends Component<{}, AppState> {
  constructor (props: {}) {
    super(props)

    this.state = {
      cities: ["Iliya", "Ancado", "Epheria", "Velia"],
      currentCity: "Iliya",
      storage: [],
    }
  }

  componentDidMount = () => {
    this.buildStorageState();
  }

  fetchCurrentStorage = (storage: Storage[], currentCity: string): Storage[] => {
    return storage.filter(s => s.name === currentCity)
  } 

  buildStorageState(): void {
    const storageCopy: Storage[] = [];
    this.state.cities.map(city => {
      storageCopy.push({ name: city, items: barterItemData.items });
    });
    this.setState({ storage: storageCopy });
  }

  render() {
    const { cities, currentCity, storage } = this.state;
    const currentStorage = this.fetchCurrentStorage(storage, currentCity)
    return (
      <React.Fragment>
        <GlobalStyle />
        <div>
          <h1>BDO Dashboard</h1>
          { currentStorage[0] && <Inventory barterItems={currentStorage[0].items} /> }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
