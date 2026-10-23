import { site_images } from '../site_images'

export default function Header() {
  return (
    <header className="header_root">
      <nav className="header_nav_wrapper">
        <div className="header_menu_left">
          <ul className="header_menu_list">
            <li className="header_menu_item"><a className="header_menu_link" href="#supplement">SUPPLEMENT</a></li>
            <li className="header_menu_item"><a className="header_menu_link" href="#laser">LASER</a></li>
            <li className="header_menu_item"><a className="header_menu_link" href="#reviews">REVIEWS</a></li>
            <li className="header_menu_item"><a className="header_menu_link" href="#journal">JOURNAL</a></li>
            <li className="header_menu_item"><a className="header_menu_link" href="#about">ABOUT</a></li>
          </ul>
        </div>

        <div className="header_brand_box">
          <img className="header_brand_logo" src={site_images.header_brand_logo} alt="LYMA Brand Logo" />
        </div>

        <div className="header_menu_right">
          <ul className="header_menu_list">
            <li className="header_menu_item"><a className="header_menu_link" href="#help">HELP &amp; SUPPORT</a></li>
            <li className="header_menu_item"><a className="header_menu_link" href="#activate">ACTIVATE</a></li>
            <li className="header_menu_item"><a className="header_menu_link" href="#account">ACCOUNT</a></li>
            <li className="header_menu_item"><button className="header_action_btn" type="button">BUY</button></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
