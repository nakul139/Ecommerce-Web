import './index.css'

const SimiliarProducts = props => {
  const {productData} = props
  const {imageUrl, title, price, rating, brand} = productData

  return (
    <li className="product-item">
      <img
        src={imageUrl}
        className="thumbnail"
        alt={`similar product ${title}`}
      />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}</p>
        <div className="product-details">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimiliarProducts
