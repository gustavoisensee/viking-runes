import elderRunes from "../../data/elder-runes.json";

type Props = {
  rune: (typeof elderRunes.runes)[0];
};

const GalleryListItem = ({ rune }: Props) => (
  <div className="group relative bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-base-300 hover:border-primary/30">
    {/* Decorative gradient background on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative p-6 flex flex-col items-center text-center min-h-[280px]">
      {/* Rune symbol */}
      <div className="text-7xl font-bold mb-4 bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 pb-2">
        {rune.rune}
      </div>

      {/* Old English name */}
      <h3 className="text-base font-semibold text-base-content/70 mb-2">
        {rune.oldEnglish}
      </h3>

      {/* English letter */}
      <h2 className="text-3xl font-bold text-base-content mb-3">
        {rune.english}
      </h2>

      {/* Divider */}
      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-3"></div>

      {/* Meaning */}
      <p className="text-sm text-base-content/60 leading-relaxed">
        {rune.meaning}
      </p>
    </div>
  </div>
);

export default GalleryListItem;
