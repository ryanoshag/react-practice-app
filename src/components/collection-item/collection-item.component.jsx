import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      <div className='add-to-cart'>
        <span>ADD TO CART</span>
      </div>
    </div>
    <div className='item-description'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)

export default CollectionItem;