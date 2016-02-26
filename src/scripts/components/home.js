import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.children || <HomeComponent />}
      </div>
    );
  }

}

var HomeComponent = React.createClass({
  render: function() {
    return (
        <div>
          <h1 className="title">Home</h1>
        </div>
    );
  }
});

export default Home;
