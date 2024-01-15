import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      console.log(cartList)
      const count = cartList.length
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                <div className="cart-summary-container">
                  <h1 className="total-heading">
                    Order Total:
                    <span className="span-text"> Rs {total}/-</span>
                  </h1>
                  <p className="cart-count">{count} items in cart</p>
                  <button type="button" className="cart-btn">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
