class Note2 extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} />
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class List2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        { srcImg: "images/1.png", content: "Hello" },
        { srcImg: "images/2.png", content: "Hello2" },
        { srcImg: "images/3.png", content: "Hello3" }
      ]
    };
  }

  add() {
    this.state.array.unshift({ srcImg: "images/4.png", content: "Hello4" });
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.add.bind(this)}>Add</button>
        {this.state.array.map(function(note, index) {
          return (
            <Note2 key={index} src={note.srcImg}>
              {note.content}
            </Note2>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>Example 5</h1>
    <List2 />
  </div>,
  document.getElementById("exampleRoot5")
);
