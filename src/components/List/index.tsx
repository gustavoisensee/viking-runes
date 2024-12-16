import React, { useState } from 'react';
import elderRunes from '../../data/elder-runes.json';
import Item from '../Item';


const List = () => {
  const [filter, setFilter] = useState(0);
  const [search, setSearch] = useState('');

  const options = elderRunes.runes.filter(option => {
    if (filter === 1) {
      return option.english.toLowerCase().includes(search.toLowerCase());
    } else if (filter === 2) {
      return option.ipa.toLowerCase().includes(search.toLowerCase());
    } else if (filter === 3) {
      return option.meaning.toLowerCase().includes(search.toLowerCase());
    }
    return option;
  })

  const handleFilter: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSearch('');
    setFilter(Number(e.target.value));
  }

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-2'>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleFilter}
        >
          <option value={0} selected={filter === 0}>Choose your filter</option>
          <option value={1} selected={filter === 1}>English alphabet</option>
          <option value={2} selected={filter === 2}>Nordic alphabet</option>
          <option value={3} selected={filter === 3}>Meaning</option>
        </select>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={search}
          disabled={filter === 0}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {options.map((rune, i) => (
          <Item rune={rune} key={i} />
        ))}
      </div>
    </>
  )
}

export default List
