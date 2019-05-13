class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenImg: 1
    };
  }

  changeImg() {
    this.setState({
      chosenImg: (this.state.chosenImg % 5) + 1
    });
  }

  render() {
    return (
      <div>
        <h2>Image</h2>
        <img src={"images/" + this.state.chosenImg + ".png"} />
      </div>
    );
  }

  componentDidMount() {
    setInterval(this.changeImg.bind(this), 10000);
  }
}

ReactDOM.render(
  <div>
    <h1>Example 3</h1>
    <Image />
  </div>,
  document.getElementById("exampleRoot3")
);
