import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';
import Breadcrumb from '../../components/Breadcrumb';
import Loading from '../../components/Loading';

import SearchList from './styles';

const Search = props => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const search = props.location.search.split('=')[1];

    async function fetchData() {
      try {
        const result = await api.get(`/items?search=${search}`);
        setData(result.data);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, [props.location.search]);

  function renderBreadcrumb(categories) {
    if (Object.keys(data).length) return false;
    const textCategories = categories.slice(0, 5).join(', ');
    return <Breadcrumb categories={textCategories} />;
  }

  const renderLoading = () => <Loading />;

  if (Object.keys(error).length) {
    return <Wrapper>{error.message}</Wrapper>;
  }

  return (
    <Wrapper>
      {Object.keys(data).length
        ? renderBreadcrumb(data.categories)
        : renderLoading()}
      <SearchList>
        {!!Object.keys(data).length &&
          data.items.map(item => <Card product={item} key={item.id} />)}
      </SearchList>
    </Wrapper>
  );
};

export default Search;
