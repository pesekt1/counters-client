const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar:{" "}
            <span className="badge rounded-pill bg-primary">
              {props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
