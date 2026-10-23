export default function SplitSection() {
  return (
    <section className="split_showcase_section">
      <div className="split_container">
        <article className="split_card_left">
          <div className="split_card_content">
            <h2 className="split_card_title">Supplement.</h2>
            <p className="split_card_description">
              Nine powerful ingredients.<br />
              One ultimate formula.
            </p>
            <div className="split_action_links">
              <a className="split_action_link" href="#discover-supplement">DISCOVER</a>
              <a className="split_action_link" href="#buy-supplement">BUY</a>
            </div>
          </div>
        </article>

        <article className="split_card_right">
          <div className="split_card_content">
            <h2 className="split_card_title">Laser.</h2>
            <p className="split_card_description">
              Ultimate skin regeneration.<br />
              A new dawn for beauty.
            </p>
            <div className="split_action_links">
              <a className="split_action_link" href="#discover-laser">DISCOVER</a>
              <a className="split_action_link" href="#buy-laser">BUY</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
