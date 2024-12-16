import elderRunes from '../../data/elder-runes.json';

type Props = {
  rune: typeof elderRunes.runes[0]
}

const Item = ({ rune }: Props) => (
  <div className="card bg-base-100 w-auto min-h-56 shadow-xl py-2">
    <h1 className="text-5xl mt-2 text-center">{rune.rune}</h1>
    <div className="card-body">
      <h2 className="card-title">
        {rune.oldEnglish}
      </h2>
      <h2 className="card-title">
        {rune.english}
      </h2>
      <p>{rune.meaning}</p>
    </div>
  </div>
)

export default Item
