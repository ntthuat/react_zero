function getName(name) {
  alert(name);
}

class ThuatNguyen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalStudents: 10,
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
    this.setState({
      totalStudents: ++this.state.totalStudents
    });
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

ReactDOM.render(
  <div>
    <ThuatNguyen name="ReactJS" teacher="Mr.Khoa">
      React Subject
    </ThuatNguyen>
    <ThuatNguyen name="NodeJS" teacher="Mr.Phu">
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
