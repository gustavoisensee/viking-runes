import { useMemo, useState } from "react";
import elderRunes from "../../data/elder-runes.json";

const Features = () => {
  const [inputText, setInputText] = useState("");
  const [mode, setMode] = useState<"toRunes" | "toEnglish">("toRunes");

  // English to Runes
  const toRunes = (text: string) => {
    return text
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        const rune = elderRunes.runes.find((r) =>
          r.english.toLowerCase().includes(char.toLowerCase())
        );
        return rune ? rune.rune : char;
      })
      .join("");
  };

  // Runes to English
  const toEnglish = (text: string) => {
    return text
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        const rune = elderRunes.runes.find((r) => r.rune === char);
        return rune ? rune.english : char;
      })
      .join("");
  };

  const translated = useMemo(() => {
    if (!inputText) return "";
    return mode === "toRunes" ? toRunes(inputText) : toEnglish(inputText);
  }, [inputText, mode]);

  const swapMode = () => {
    setMode(mode === "toRunes" ? "toEnglish" : "toRunes");
    // Optionally swap the input and output
    if (translated) {
      setInputText(translated);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Rune Translator</h2>

      <div className="card bg-base-200 shadow-xl max-w-2xl">
        <div className="card-body">
          <div className="flex items-center justify-between mb-4">
            <h3 className="card-title">Bidirectional Translator</h3>

            {/* Mode Toggle */}
            <div className="flex items-center gap-3 bg-base-100 rounded-lg p-2">
              <span
                className={`text-sm font-semibold ${
                  mode === "toRunes" ? "text-primary" : "text-base-content/50"
                }`}
              >
                English → Runes
              </span>
              <button
                onClick={swapMode}
                className="btn btn-circle btn-sm bg-gradient-to-br from-primary via-secondary to-primary hover:scale-110 transition-transform border-none"
                aria-label="Swap translation direction"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </button>
              <span
                className={`text-sm font-semibold ${
                  mode === "toEnglish" ? "text-primary" : "text-base-content/50"
                }`}
              >
                Runes → English
              </span>
            </div>
          </div>

          <p className="text-sm text-base-content/70 mb-4">
            {mode === "toRunes"
              ? "Type any text to convert it into Elder Futhark runes"
              : "Paste runes to convert them back to English letters"}
          </p>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">
                {mode === "toRunes" ? "English Text" : "Runic Text"}
              </span>
            </label>
            <input
              type="text"
              placeholder={
                mode === "toRunes"
                  ? "Type your text here..."
                  : "Paste runes here..."
              }
              className="input input-bordered w-full"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          <div className="divider">Translation Result</div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">
                {mode === "toRunes"
                  ? "Runic Translation"
                  : "English Translation"}
              </span>
            </label>
            <div className="p-4 bg-base-100 rounded-lg border-2 border-base-300 min-h-[80px] flex items-center justify-center">
              <span
                className={`font-bold text-primary ${
                  mode === "toRunes" ? "text-4xl" : "text-2xl"
                }`}
              >
                {translated || "Your translation will appear here..."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
