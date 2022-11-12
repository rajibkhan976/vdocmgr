import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import useAppStore, { AppStore } from "../store/useAppStore";

const TopNavbar = () => {
  const { isAuthenticated, setIsAuthenticated, setShouldUploadCredential } =
    useAppStore((state) => state as AppStore);

  const handleSetIsAuthenticated = (status: boolean) => {
    setIsAuthenticated(status);
    !status && sessionStorage.removeItem("user");
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#C4C4C4" }}>
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-semibold">
          vDoc
        </Navbar.Brand>
        <Nav>
          {isAuthenticated ? (
            <NavDropdown
              title={`User ${
                sessionStorage.getItem("user") && sessionStorage.getItem("user")
              }`}
              id="collasible-nav-dropdown"
              className="px-2"
            >
              <NavDropdown.Item onClick={() => handleSetIsAuthenticated(false)}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setShouldUploadCredential(false)}
            >
              Log in
            </button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
