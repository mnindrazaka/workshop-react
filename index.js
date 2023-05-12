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
  return (
    <div>
      <Navbar />
      <p>Welcome to Home Page</p>
      <input placeholder="Enter product name" />
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
