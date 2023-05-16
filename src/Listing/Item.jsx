import PropTypes from 'prop-types';
export const Item = ({item}) => {
  const {url, MainImage, title, currency_code, price, quantity} = item;

  return (
    <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title.length > 50 ? title.substring(0, 50) + ' ...' : title}</p>
          <p className="item-price">{
            currency_code === "USD" 
            ? `$${price}` 
            : (currency_code === "EUR" ? `€${price}` : `${price} GBP`)
          }
          </p>
          <p className={
            quantity <= 10
            ? "item-quantity level-low"
            : (quantity > 20 ? "item-quantity level-high" : "item-quantity level-medium")
          }>{quantity} left</p>
        </div>
      </div>
  );
}
Item.propTypes = {
  item: PropTypes.object
}