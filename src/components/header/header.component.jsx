import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';

const Header = ({ currentUser, cartDropdownHidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/login'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { cartDropdownHidden ? null : <CartDropdown /> }
    </div>
);

// Using createStructuredSelector allows us to avoid passing in state to all selectors; it'll take care of passing it down to each.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);