import React, { Component, PropTypes } from 'react';
import { HelmetComponent } from './HelmetComponent';

class Page extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    return (
      <main className="main-ontainer">
        <PriveHelmet title="this is the page title"/>
      </main>
    );
  }
}

export default Page;
