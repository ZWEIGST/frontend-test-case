import React, { useCallback, useState } from 'react';

import './Filters.css';

export function Filters({
  sortBy,
  onSortByChange,
  selectedCategory,
  onSelectedCategoryChange,
}) {
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = useCallback(
    (e) => {
      onSelectedCategoryChange(e.target.value);
    },
    [onSelectedCategoryChange]
  );

  const handleSortChange = useCallback(
    (e) => {
      onSortByChange(e.target.value);
    },
    [onSortByChange]
  );

  return (
    <div className='filter-controls'>
      <button onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
      </button>

      {showFilters && (
        <>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value='all'>Все категории</option>
            <option value='phones'>Телефоны</option>
            <option value='laptops'>Ноутбуки</option>
            <option value='tablets'>Планшеты</option>
          </select>

          <select value={sortBy} onChange={handleSortChange}>
            <option value='name'>По названию</option>
            <option value='price'>По цене</option>
          </select>
        </>
      )}
    </div>
  );
}
