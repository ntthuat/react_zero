class Note extends React.Component {
  render() {
    return (
      <div className="div-note6">
        <p>Name: {this.props.children.name}</p>
        <p>Url: {this.props.children.url}</p>
      </div>
    );
  }
}

class FetchTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then(response => response.json())
      .then(data => this.setState({ results: data.results }));
  }

  fetch_10() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10").then(response => {
      if (response.ok) {
        alert(response.ok);
        alert(response.json());
        /*console.log(response.json());*/
        alert(response.status);
        //alert(response.statusText);
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Fetch API Test</h1>
        <button onClick={this.fetch_10.bind(this)}>Fetch 10</button>
        <p>Total: {this.state.results.length} </p>
        <div className="div-list6">
          {this.state.results.map(function(note, index) {
            return <Note key={index}>{note}</Note>;
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <FetchTest />
  </div>,
  document.getElementById("RootFetchApiTest")
);
