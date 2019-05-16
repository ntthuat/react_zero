var list;

class Note6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onEdit: false
    };
  }

  edit() {
    this.setState({
      onEdit: true
    });
  }

  delete() {
    $.post("/delete", { idDelete: this.props.id }, function(data) {
      list.setState({
        array: data
      });
    });
  }

  save() {
    var note = this;
    $.post(
      "/update",
      { idUpdate: this.props.id, content: this.refs.txt.value },
      function(data) {
        list.setState({
          array: data
        });
        note.setState({
          onEdit: false
        });
      }
    );
  }

  cancel() {
    this.setState({
      onEdit: false
    });
  }

  render() {
    if (this.state.onEdit) {
      return (
        <div className="div-note6">
          <input defaultValue={this.props.children} ref="txt" />
          <button onClick={this.save.bind(this)}> Save</button>
          <button onClick={this.cancel.bind(this)}> Cancel</button>
        </div>
      );
    } else {
      return (
        <div className="div-note6">
          <p>{this.props.children}</p>
          <button onClick={this.delete.bind(this)}> Delete</button>
          <button onClick={this.edit.bind(this)}> Edit</button>
        </div>
      );
    }
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
      array: []
    };
  }

  render() {
    return (
      <div className="div-list6">
        <div id="div-add" />
        <button onClick={addDiv}> Add</button>
        {this.state.array.map(function(note, index) {
          return (
            <Note6 key={index} id={index}>
              {note}
            </Note6>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    var that = this;
    $.post("/getNotes", function(data) {
      that.setState({
        array: data
      });
    });
  }
}

class InputDiv extends React.Component {
  send() {
    $.post("/add", { note: this.refs.txt.value }, function(data) {
      list.setState({
        array: data
      });
    });

    ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
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
