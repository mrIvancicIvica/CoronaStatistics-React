import React from "react";
import { Cards, Chart, CountryPicker } from "./components/";
import { fetchData } from "./api";

import styles from "./App.module.css";

import image from "./image/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fatchData = await fetchData();
    this.setState({ data: fatchData });
    console.log(fatchData);
  }

  changeCountry = async (country) => {
    const fechetdata = await fetchData(country);
    this.setState({ data: fechetdata, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="Corona" className={styles.image} />
        <Cards data={data} />
        <CountryPicker changeCountry={this.changeCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
