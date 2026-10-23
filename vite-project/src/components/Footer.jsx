import { site_images } from '../site_images'

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_main_container">
        <div className="footer_navigation_grid">
          <div className="footer_column_box">
            <h4 className="footer_column_title">SUPPLEMENT</h4>
            <ul className="footer_links_list">
              <li><a className="footer_link_item" href="#benefits">Benefits</a></li>
              <li><a className="footer_link_item" href="#formula">Formula</a></li>
              <li><a className="footer_link_item" href="#immunity">Immunity</a></li>
              <li><a className="footer_link_item" href="#journal">Journal</a></li>
              <li><a className="footer_link_item" href="#reviews">Reviews</a></li>
              <li><a className="footer_buy_highlight" href="#buy">Buy</a></li>
            </ul>
          </div>

          <div className="footer_column_box">
            <h4 className="footer_column_title">LYMA LASER</h4>
            <ul className="footer_links_list">
              <li><a className="footer_link_item" href="#lyma-laser">LYMA Laser</a></li>
              <li><a className="footer_link_item" href="#active-mist">Active Mist</a></li>
              <li><a className="footer_link_item" href="#priming-serum">Priming Serum</a></li>
              <li><a className="footer_link_item" href="#technology">Technology</a></li>
              <li><a className="footer_link_item" href="#results">Results</a></li>
              <li><a className="footer_link_item" href="#laser-journal">Journal</a></li>
              <li><a className="footer_link_item" href="#laser-reviews">Reviews</a></li>
              <li><a className="footer_buy_highlight" href="#buy">Buy</a></li>
            </ul>
          </div>

          <div className="footer_column_box">
            <h4 className="footer_column_title">ABOUT</h4>
            <ul className="footer_links_list">
              <li><a className="footer_link_item" href="#about-us">About</a></li>
              <li><a className="footer_link_item" href="#about-journal">Journal</a></li>
              <li><a className="footer_link_item" href="#faqs">FAQs</a></li>
              <li><a className="footer_link_item" href="#contact">Contact</a></li>
              <li><a className="footer_link_item" href="#terms">Terms</a></li>
              <li><a className="footer_link_item" href="#privacy">Privacy</a></li>
              <li><a className="footer_link_item" href="#warranty">Warranty</a></li>
            </ul>
          </div>

          <div className="footer_column_box">
            <h4 className="footer_column_title">ACCOUNT</h4>
            <ul className="footer_links_list">
              <li><a className="footer_link_item" href="#activate">Activate</a></li>
              <li><a className="footer_link_item" href="#subscription">My subscription</a></li>
              <li><a className="footer_link_item" href="#extras">Add extras</a></li>
              <li><a className="footer_link_item" href="#orders">My orders</a></li>
              <li><a className="footer_link_item" href="#account-details">Account details</a></li>
              <li><a className="footer_link_item" href="#payment-method">Payment method</a></li>
              <li><a className="footer_link_item" href="#login-details">Login details</a></li>
            </ul>
          </div>
        </div>

        <div className="footer_newsletter_side">
          <h4 className="footer_newsletter_title">NEWSLETTER</h4>
          <div className="footer_subscription_box">
            <p className="footer_subscription_caption">Subscribe to our newsletter.</p>
            <form className="footer_newsletter_form" onSubmit={(e) => e.preventDefault()}>
              <input
                className="footer_email_input"
                type="email"
                placeholder="LYMA Newsletter"
                required
              />
              <button className="footer_submit_button" type="submit">SIGN UP</button>
            </form>
          </div>

          <div className="footer_socials_row">
            <a className="footer_social_icon_link" href="#youtube">
              <img className="footer_social_icon_img" src={site_images.social_youtube_icon} alt="YouTube" />
            </a>
            <a className="footer_social_icon_link" href="#linkedin">
              <img className="footer_social_icon_img" src={site_images.social_linkedin_icon} alt="LinkedIn" />
            </a>
            <a className="footer_social_icon_link" href="#facebook">
              <img className="footer_social_icon_img" src={site_images.social_facebook_icon} alt="Facebook" />
            </a>
            <a className="footer_social_icon_link" href="#instagram">
              <img className="footer_social_icon_img" src={site_images.social_instagram_icon} alt="Instagram" />
            </a>
            <a className="footer_social_icon_link" href="#pinterest">
              <img className="footer_social_icon_img" src={site_images.social_pinterest_icon} alt="Pinterest" />
            </a>
          </div>

          <p className="footer_copyright_label">© LYMA Life Ltd. 2021</p>
        </div>
      </div>
    </footer>
  )
}
