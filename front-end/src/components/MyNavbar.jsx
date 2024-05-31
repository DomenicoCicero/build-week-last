import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const user = useSelector(state => {
    return state.user;
  });

  //   const logout = () => {
  //     axios
  //       .post("/logout")
  //       .then(() => dispatch({ type: LOGOUT }))
  //       .then(() => navigate("/login"));
  //   };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          La mia palestra
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {!user && (
            <>
              <Link className="btn btn-primary me-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary" to="/register">
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <span className="me-2">{user.name}</span>
              {/* se l'utente non ha immagine profilo gli diamo una di default */}
              <img src={`/storage/${user.profile_img}`} alt="" width={"50px"} />
              <button
                className="btn btn-primary"
                // onClick={logout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;