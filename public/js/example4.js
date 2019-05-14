class Note extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ["Hello", "Hi", "KhoaPham"]
    };
  }

  add() {
    this.state.array.push("Node js", "React js");
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.add.bind(this)}>Add</button>
        {this.state.array.map(function(note, index) {
          return <Note key={index}>{note}</Note>;
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>Example 4</h1>
    <List />
  </div>,
  document.getElementById("exampleRoot4")
);
