import { BsSearch, BsJustify } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="main-title">
        <h3>Hello Shahrukh👋,</h3>
      </div>
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="block">
        <div className="header-left">
          <BsSearch className="icon" />
          <span>Search</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
