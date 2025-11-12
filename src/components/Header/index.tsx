const Header = () => {
  // Decorative runes for the border
  const decorativeRunes = "ᚠᚢᚦᚨᚱᚲ";

  return (
    <header className="relative bg-gradient-to-br from-base-200 via-base-300 to-base-200 shadow-lg overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="text-8xl font-bold tracking-widest leading-relaxed break-all">
          {decorativeRunes.repeat(50)}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Top decorative rune border */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-3 text-primary/40">
            <span className="text-3xl">ᚠ</span>
            <span className="text-2xl">ᚢ</span>
            <span className="text-3xl">ᚦ</span>
            <div className="w-12 h-0.5 bg-primary/40"></div>
            <span className="text-3xl">ᚨ</span>
            <span className="text-2xl">ᚱ</span>
            <span className="text-3xl">ᚲ</span>
          </div>
        </div>

        {/* Main title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-relaxed bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent pb-2 mb-3">
            Viking Runes
          </h1>
          <p className="text-lg text-base-content/70 font-medium">
            Explore Elder Futhark runes and translate your words
          </p>
          <p className="text-sm text-base-content/50 mt-1">
            ᛖᛚᛞᛖᚱ ᚠᚢᚦᚨᚱᚲ • 2nd to 8th centuries
          </p>
        </div>

        {/* Bottom decorative rune border */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-3 text-primary/40">
            <span className="text-2xl">ᚷ</span>
            <span className="text-3xl">ᚹ</span>
            <span className="text-2xl">ᚺ</span>
            <div className="w-12 h-0.5 bg-primary/40"></div>
            <span className="text-3xl">ᚾ</span>
            <span className="text-2xl">ᛁ</span>
            <span className="text-3xl">ᛃ</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
