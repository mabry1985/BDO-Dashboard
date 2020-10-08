import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import barterItemData from "./barterItems.json";
import { BarterItem, Storage } from "./types";
import Inventory from "./Components/Inventory";

const GlobalStyle = createGlobalStyle`
  body {
    background: #5a5a5a;
  }
`;

interface AppState {
  cities: string[];
  currentCity: string;
  storage: Storage[];
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      cities: ["Iliya", "Ancado", "Epheria", "Velia"],
      currentCity: "Iliya",
      storage: [],
    };
  }

  componentDidMount = () => {
    this.buildStorageState();
  };

  fetchCurrentStorage = (
    storage: Storage[],
    currentCity: string
  ): Storage[] => {
    return storage.filter((s) => s.name === currentCity);
  };

  buildStorageState(): void {
    const storageCopy: Storage[] = [];
    this.state.cities.map((city) => {
      storageCopy.push({ name: city, items: barterItemData.items });
    });
    this.setState({ storage: storageCopy });
  }

  handleUpClick = (currentItem: BarterItem, currentCity: string): void => {
    const storageCopy: Storage[] = [...this.state.storage].map((storage) => {
      if (storage.name === currentCity) {
        storage.items.map((item) => {
          if (item.name === currentItem.name) item.count++;

          return item;
        });
      }
      return storage;
    });

    this.setState({ storage: [...storageCopy] });
  };

  handleDownClick = (currentItem: BarterItem, currentCity: string): void => {
    const storageCopy: Storage[] = [...this.state.storage].map((storage) => {
      if (storage.name === currentCity) {
        storage.items.map((item) => {
          if (item.name === currentItem.name && item.count > 0) item.count--;

          return item;
        });
      }
      return storage;
    });

    this.setState({ storage: [...storageCopy] });
  };

  render() {
    const { cities, currentCity, storage } = this.state;
    const currentStorage = this.fetchCurrentStorage(storage, currentCity);
    return (
      <React.Fragment>
        <GlobalStyle />
        <div>
          <h1>BDO Dashboard</h1>
          {currentStorage[0] && (
            <Inventory
              onUpClick={this.handleUpClick}
              onDownClick={this.handleDownClick}
              barterItems={currentStorage[0].items}
              currentStorage={currentStorage}
              currentCity={currentCity}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
