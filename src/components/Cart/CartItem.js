import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch=useDispatch();
  
  const { title, quantity, total, price,id } = props.item;
  console.log(props)
  const removeItemhandler=()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }
  const additemCart=()=>{
    dispatch(cartActions.additemToCart({
      id,
      title,
      price,
    }))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed('2')}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemhandler}>-</button>
          <button onClick={additemCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
