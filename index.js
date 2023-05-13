function Link(props) {
  return (
    <a
      href={props.href}
      onClick={(event) => {
        event.preventDefault();
        history.pushState(null, "", props.href);
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      }}
    >
      {props.textContent}
    </a>
  );
}

function Navbar() {
  return (
    <div>
      <Link href="#home" textContent="Home" />
      <Link href="#about" textContent="About" />
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <Navbar />
      <p>Welcome to About Page</p>
    </div>
  );
}

function HomePage() {
  const [inputValue, setInputValue] = React.useState("");

  const [products, setProducts] = React.useState([]);

  // 1. membuat useEffect
  React.useEffect(
    function () {
      // 2. mengganti event.target.value menjadi inputValue
      fetch("https://dummyjson.com/products/search?q=" + inputValue)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setProducts(data.products);
        });
    },
    [inputValue]
  );

  return (
    <div>
      <Navbar />
      <p>Welcome to Home Page</p>
      <input
        value={inputValue}
        placeholder="Enter product name"
        onChange={function (event) {
          setInputValue(event.target.value);

          // 3. hapus
        }}
      />

      <button
        onClick={function () {
          setInputValue("");
        }}
      >
        Clear
      </button>
      <p>{inputValue}</p>
      <ol>
        {products.map(function (productItem) {
          return <li>{productItem.title}</li>;
        })}
      </ol>
    </div>
  );
}

function App() {
  if (window.location.hash == "#home") {
    return <HomePage />;
  } else if (window.location.hash == "#about") {
    return <AboutPage />;
  } else {
    return <HomePage />;
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
