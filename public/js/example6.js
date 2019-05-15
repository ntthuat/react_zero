var list;

class Note6 extends React.Component {
  render() {
    return <div className="div-note6">{this.props.children}</div>;
  }
}

function addDiv() {
  ReactDOM.render(<InputDiv />, document.getElementById("div-add"));
}

class List6 extends React.Component {
  constructor(props) {
    super(props);
    list = this;
    this.state = {
      array: ["Hi", "Hello", "KhoaPham"]
    };
  }

  render() {
    return (
      <div className="div-list6">
        <div id="div-add" />
        <button onClick={addDiv}> Add</button>
        {this.state.array.map(function(note, index) {
          return <Note6 key={index}>{note}</Note6>;
        })}
      </div>
    );
  }
}

class InputDiv extends React.Component {
  send() {
    list.setState({
      array: list.state.array.concat(this.refs.txt.value)
    });
  }

  render() {
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note" />
        <button onClick={this.send.bind(this)}> Send</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>Example 6</h1>
    <List6 />
  </div>,
  document.getElementById("exampleRoot6")
);
