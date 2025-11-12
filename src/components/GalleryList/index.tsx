import { useState } from "react";
import elderRunes from "../../data/elder-runes.json";
import GalleryListItem from "../GalleryListItem";

const GalleryList = () => {
  const [search, setSearch] = useState("");

  const options = elderRunes.runes.filter((option) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      option.english.toLowerCase().includes(searchLower) ||
      option.ipa.toLowerCase().includes(searchLower) ||
      option.meaning.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <div className="flex flex-col gap-4 pb-4">
        <div className="form-control">
          <label className="label" htmlFor="search">
            Search (English, Nordic, or Meaning)
          </label>
          <input
            id="search"
            type="text"
            placeholder="Type to search..."
            className="input input-bordered w-full max-w-xs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {options.map((rune, i) => (
          <GalleryListItem rune={rune} key={i} />
        ))}
      </div>
    </>
  );
};

export default GalleryList;
