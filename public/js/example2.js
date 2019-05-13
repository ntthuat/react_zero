class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenImg: 1
    };
  }

  next() {
    this.setState({
      chosenImg: this.state.chosenImg == 5 ? 5 : this.state.chosenImg + 1
    });
  }

  previous() {
    this.setState({
      chosenImg: this.state.chosenImg == 1 ? 1 : this.state.chosenImg - 1
    });
  }

  render() {
    return (
      <div className="div-album">
        <h2>Album</h2>
        <img src={"images/" + this.state.chosenImg + ".png"} />
        <hr />
        <button onClick={this.next.bind(this)}>Next</button>
        <button onClick={this.previous.bind(this)}>Previous</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>Example 2</h1>
    <Album />
  </div>,
  document.getElementById("exampleRoot2")
);
