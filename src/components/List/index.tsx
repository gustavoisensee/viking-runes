import React, { useMemo, useState } from 'react';
import elderRunes from '../../data/elder-runes.json';
import Item from '../Item';


const List = () => {
  const [filter, setFilter] = useState(0);
  const [search, setSearch] = useState('');
  const [translate, setTranslate] = useState('gustavo');

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

  const translated = useMemo(() => {
    return translate.split('').map(char => {
      if (char === ' ') return ' ';
      const rune = elderRunes.runes.find(r => r.english.toLowerCase().includes(char.toLowerCase()));
      return rune ? rune.rune : ' ';
    }).join('');
  }, [translate]);

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-2'>
        <div className="form-control">
          <label className="label">Filter</label>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handleFilter}
          >
            <option value={0} selected={filter === 0}>Choose your filter</option>
            <option value={1} selected={filter === 1}>English alphabet</option>
            <option value={2} selected={filter === 2}>Nordic alphabet</option>
            <option value={3} selected={filter === 3}>Meaning</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">&nbsp;</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={search}
            disabled={filter === 0}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-2'>
        <div className="form-control">
          <label className="label">Translate your word</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={translate}
            onChange={(e) => setTranslate(e.target.value)}
          />
        </div>

        <div className="form-control flex justify-center">
          <label className="label">&nbsp;</label>
          <span className="text-2xl align-middle">{translated}</span>
        </div>
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
