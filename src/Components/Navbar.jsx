import logo from "../Images/globe.png";
export default function Navbar() {
  return (
    <div className="topBar">
      <img src={logo} alt="logoimage" />
      <nav className="text">mytraveljournal</nav>
    </div>
  );
}
