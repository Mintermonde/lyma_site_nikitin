import { site_images } from '../site_images'

export default function ProductSection() {
  return (
    <section className="product_overview_section">
      <div className="product_overview_container">
        <h2 className="product_heading_title">THE QUEST FOR BETTER.</h2>
        <img
          className="product_image_preview"
          src={site_images.products_collection_showcase}
          alt="LYMA Product Collection"
        />
        <p className="product_description_text">
          At LYMA, we’re always searching for the perfect balance of science, nature and technology.
          Every LYMA product has been designed to work together. We know that when we discover the best,
          you’ll discover yours.
        </p>
      </div>
    </section>
  )
}
