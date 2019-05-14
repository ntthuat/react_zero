class Note6 extends React.Component {
  render() {
    return <div className="div-note6">{this.props.children}</div>;
  }
}

class List6 extends React.Component {
  render() {
    return (
      <div className="div-list6">
        <Note6>KhoaPham</Note6>
        <Note6>Android</Note6>
        <Note6>ReactJs</Note6>
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
