class Com extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  addNum() {
    this.state.num = parseInt(this.state.num) + 1;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.addNum.bind(this)}>Hello {this.state.num}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>Example 1</h1>
    <Com />
  </div>,
  document.getElementById("exampleRoot1")
);
