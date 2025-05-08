
import React from 'react';

interface ReviewDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const ReviewDots = ({ total, current, onSelect }: ReviewDotsProps) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array(total).fill(0).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === current ? 'bg-shark-blue' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};

export default ReviewDots;
