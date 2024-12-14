import elderRunes from '../../data/elder-runes.json';
import Item from '../Item';

const List = () => (
  <div className="flex flex-wrap columns-3 gap-5">
    {elderRunes.runes.map((rune, i) => (
      <Item rune={rune} key={i} />
    ))}
  </div>
)

export default List
