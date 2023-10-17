import { BsFillNutFill, BsFillPersonFill, BsPercent } from "react-icons/bs";
import { PiKeyBold } from "react-icons/pi";
import { BiCube, BiMoneyWithdraw, BiSolidHelpCircle } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFillNutFill className="icon_header" />
          Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <PiKeyBold className="icon" />
            <span className="icon-content"> Dashboard</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BiCube className="icon" />
            <span className="icon-content"> Product</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillPersonFill className="icon" />
            <span className="icon-content"> Customers</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BiMoneyWithdraw className="icon" />
            <span className="icon-content"> Income</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPercent className="icon" />
            <span className="icon-content"> Promote</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BiSolidHelpCircle className="icon" />
            <span className="icon-content"> Help</span>
          </a>
        </li>
      </ul>

      {/* <div>
        <img src="src/assets/images/img1.jpg" className='image2' />
        <span className='evano'>
            <h7 className='side-name1'>Evano</h7>
            <p className='side-name2'>
              Project Manager
            </p>
            </span>
            </div> */}
    </aside>
  );
}

export default Sidebar;
