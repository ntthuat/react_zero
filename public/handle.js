function getName(name) {
  alert(name);
}

class ThuatNguyen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalStudents: this.props.totalStudents,
      date: new Date()
    };
  }

  callGetname() {
    getName(this.props.teacher);
  }

  getInfo() {
    alert(this.props.children);
  }

  addStudents() {
    this.state.totalStudents = parseInt(this.state.totalStudents) + 1;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <h1 className="yellow">
          Thuat Nguyen {this.props.name} - {this.props.teacher}{" "}
        </h1>
        <div>Total of students: {this.state.totalStudents}</div>
        <p>{this.props.children}</p>
        <button onClick={this.getInfo.bind(this)}>Information</button>
        <button
          onClick={() => {
            var str = this.props.name + "'s teacher is " + this.props.teacher;
            getName(str);
          }}
        >
          Information2
        </button>
        <button onClick={this.addStudents.bind(this)}>Add students</button>
        <ThuatNguyen2 />
      </div>
    );
  }
}

class ThuatNguyen2 extends React.Component {
  render() {
    return <h3> Lap Trinh ReactJs </h3>;
  }
}

class InputTag extends React.Component {
  show() {
    var text = this.refs.sl.value;
    alert(text);
  }

  render() {
    return (
      <div>
        <select ref="sl">
          <option value="a">AAA</option>
          <option value="b">BBB</option>
          <option value="c">CCC</option>
        </select>
        <input type="text" ref="txt" />
        <button onClick={this.show.bind(this)}>Show off</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <InputTag />
    <ThuatNguyen name="ReactJS" teacher="Mr.Khoa" totalStudents="10">
      React Subject
    </ThuatNguyen>
    <ThuatNguyen name="NodeJS" teacher="Mr.Phu" totalStudents="20">
      Node Subject
    </ThuatNguyen>
  </div>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <h1 className="yellow">Thuat Nguyen</h1>
    <h1>Thuat Nguyen</h1>
  </div>,
  document.getElementById("root2")
);
