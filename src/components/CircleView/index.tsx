import React, { useState, useEffect } from 'react';
import { elderRunes, Rune } from '../../data/elder-runes.json';

const CircleView: React.FC = () => {
  const [selectedRune, setSelectedRune] = useState<Rune | null>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  // Start with default dimensions, adjust based on screen size in useEffect
  const [circleDimensions, setCircleDimensions] = useState({ 
    radius: 120, 
    centerX: 140, // Half of containerSize
    centerY: 140, // Half of containerSize
    containerSize: 280 
  });

  useEffect(() => {
    const updateDimensions = () => {
      const isSmallScreen = window.innerWidth < 640; // Tailwind's 'sm' breakpoint
      if (isSmallScreen) {
        // Smaller circle for small screens
        setCircleDimensions({ radius: 90, centerX: 110, centerY: 110, containerSize: 220 });
      } else {
        // Default larger circle for medium screens and up
        setCircleDimensions({ radius: 120, centerX: 140, centerY: 140, containerSize: 280 });
      }
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener('resize', updateDimensions); // Adjust on resize

    if (elderRunes.length > 0 && !selectedRune) {
      setSelectedRune(elderRunes[0]); // Initialize selectedRune if not already set
    }
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', updateDimensions);
  }, [selectedRune]); // elderRunes is stable, selectedRune dependency for initialization

  useEffect(() => {
    // Recalculate positions when circleDimensions change
    const { radius, centerX, centerY } = circleDimensions;
    const newPositions = elderRunes.map((_, index) => {
      const angle = (index / elderRunes.length) * 2 * Math.PI - Math.PI / 2; // Offset by -PI/2 to start at the top
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return { x, y };
    });
    setPositions(newPositions);
  }, [elderRunes, circleDimensions]); // Recalculate when elderRunes or dimensions change


  const handleRuneClick = (rune: Rune) => {
    setSelectedRune(rune);
  };

  return (
    <div className="flex flex-col items-center justify-start pt-8 md:pt-12 p-4 min-h-[calc(100vh-200px)] text-white"> {/* Adjusted min-height */}
      <div 
        className="relative mb-8 transition-all duration-300 ease-in-out"
        style={{ 
          width: `${circleDimensions.containerSize}px`, 
          height: `${circleDimensions.containerSize}px` 
        }}
      >
        {/* Central Decorative Circle */}
        <div 
          className="absolute bg-gray-700/40 rounded-full border border-gray-600/60 shadow-inner"
          style={{ 
            left: `${circleDimensions.centerX - circleDimensions.radius * 0.4}px`, // Smaller inner circle
            top: `${circleDimensions.centerY - circleDimensions.radius * 0.4}px`,
            width: `${circleDimensions.radius * 0.8}px`, // Smaller inner circle
            height: `${circleDimensions.radius * 0.8}px`,
          }}
        />
        {positions.length > 0 && elderRunes.map((rune, index) => (
          <div
            key={rune.id}
            onClick={() => handleRuneClick(rune)}
            className={`absolute w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110
                        border-2 shadow-md hover:shadow-yellow-400/40
                        ${selectedRune?.id === rune.id 
                          ? 'bg-yellow-500 text-gray-900 scale-110 shadow-xl border-yellow-300 ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-800 z-10' 
                          : 'bg-gray-600 border-gray-500 hover:bg-gray-500 hover:border-yellow-500'}`}
            style={{
              left: `${positions[index].x}px`, // Positions are now absolute to the container center
              top: `${positions[index].y}px`,
              transform: 'translate(-50%, -50%)' // Center the rune div on its (x,y) point
            }}
            title={rune.english}
          >
            <span className="text-xl sm:text-2xl font-medium antialiased">{rune.rune}</span>
          </div>
        ))}
      </div>

      {selectedRune && (
        <div className="text-center p-4 sm:p-6 bg-gray-700/60 backdrop-blur-md rounded-xl shadow-2xl max-w-lg mx-auto border border-gray-600/50">
          <h2 className="text-4xl sm:text-5xl text-yellow-400 mb-2 sm:mb-3 font-bold drop-shadow-lg">{selectedRune.rune}</h2>
          <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-100">{selectedRune.english}</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-2">{selectedRune.meaning}</p>
        </div>
      )}
    </div>
  );
};

export default CircleView;
