class ThuatNguyen extends React.Component {
  render() {
    return <h1 className="yellow"> Thuat Nguyen React </h1>;
  }
}

ReactDOM.render(
  <div>
    <ThuatNguyen />
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
