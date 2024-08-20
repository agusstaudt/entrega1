import './cardWidget.css'
export const CardWidget = () => {
  let items = 3; 

  return (
    <div className="cart-widget">
      <button type="button" class="btn position-relative">
        <i class="bi bi-cart-fill"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {items}
        </span>
      </button>
    </div>
  );
};