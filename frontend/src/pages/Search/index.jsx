import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';
import Breadcrumb from '../../components/Breadcrumb';

const Search = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const search = props.location.search.split('=')[1];
    axios.get(`http://localhost:3001/api/items?search=${search}`).then((result) => {
      setData(result.data);
    });
  }, []);
  function renderBreadcrumb(categories) {
    if (Object.keys(data).length) return false;
    const textCategories = categories.slice(0, 5).join(', ');
    return <Breadcrumb categories={textCategories} />;
  }

  const renderEmpty = () => <div className="loading">Carregando...</div>;

  return (
    <Wrapper>
      {Object.keys(data).length ? renderBreadcrumb(data.categories) : renderEmpty() }
      <div className="search-list">
        {!!Object.keys(data).length && data.items.map(item => (
          <Card product={item} key={item.id} />))}
      </div>
    </Wrapper>
  );
};

export default Search;
