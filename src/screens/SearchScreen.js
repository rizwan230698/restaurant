import React, { useState, useContext } from 'react';
import { ScrollView } from 'react-native';

import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import RestaurentList from '../components/RestaurentList';
import Loader from '../components/Loader';
import CartDropdown from '../components/Dropdown';
import { CartContext } from '../context/cartProvider';

const SearchScreen = () => {
  const { state } = useContext(CartContext);
  const [term, setTerm] = useState('');
  const [fetchRestaurents, restaurents, errMessage] = useResults();

  const filterByPrice = (price) => {
    return restaurents.filter((restaurent) => restaurent.price === price);
  };

  const onChange = (value) => {
    setTerm(value);
  };

  const onSubmit = ({ nativeEvent: { text: searchTerm } }) => {
    fetchRestaurents(searchTerm);
  };
  if (!restaurents.length) {
    return <Loader />;
  }
  return (
    <>
      <SearchBar term={term} onChange={onChange} onSubmit={onSubmit} />
      <ScrollView>
        <RestaurentList
          title="Cost Effective"
          restaurents={filterByPrice('$')}
        />
        <RestaurentList title="Bit Pricier" restaurents={filterByPrice('$$')} />
        <RestaurentList
          title="Big Spender"
          restaurents={filterByPrice('$$$')}
        />
      </ScrollView>
      {!state.hidden && <CartDropdown cartItems={state.cartItems} />}
    </>
  );
};

export default SearchScreen;
