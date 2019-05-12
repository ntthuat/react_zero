class ThuatNguyen extends React.Component {
  getInfo() {
    alert(this.props.children);
  }
  render() {
    return (
      <div>
        <h1 className="yellow">
          Thuat Nguyen {this.props.name} - {this.props.teacher}{" "}
        </h1>
        <p>{this.props.children}</p>
        <button onClick={this.getInfo.bind(this)}>Information</button>
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
