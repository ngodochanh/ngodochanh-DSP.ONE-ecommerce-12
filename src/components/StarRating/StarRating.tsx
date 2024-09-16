'use client';

import { BiSolidStar, BiSolidStarHalf } from 'react-icons/bi';
import { MouseEvent, useState, useCallback, useMemo } from 'react';

type StarRatingProps = {
  initialRating?: number; // Rating khởi đầu
  isInteractive?: boolean; // Cho hover và click để thay đổi giá trị không
};

function StarRating({ initialRating = 0, isInteractive = true }: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState<number | null>(null);

  const handleClick = useCallback(
    (value: number) => {
      if (isInteractive) {
        if (hover! % 1 === 0.5) {
          setRating(value - 0.5);
        } else {
          setRating(value);
        }
      }
    },
    [hover, isInteractive],
  );

  const handleMouseOver = useCallback(
    (e: MouseEvent<HTMLDivElement>, value: number, isHalf: boolean) => {
      e.stopPropagation();
      if (isInteractive) {
        setHover(isHalf ? value - 0.5 : value);
      }
    },
    [isInteractive],
  );

  const handleMouseOut = useCallback(() => {
    if (isInteractive) {
      setHover(null);
    }
  }, [isInteractive]);

  const renderStar = useCallback(
    (value: number) => {
      const integerPart = Math.floor(rating);
      const decimalPart = Math.round((rating - integerPart) * 10);
      const isHalf = hover! % 1 === 0.5;

      if ((decimalPart === 5 && value === integerPart + 1 && !hover) || (hover === value - 0.5 && isHalf)) {
        return (
          <BiSolidStarHalf
            className={`h-6 w-6 ${value <= (hover || rating + 1) ? 'text-yellow-500' : 'text-gray-300'}`}
          />
        );
      }

      return <BiSolidStar className={`h-6 w-6 ${value <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`} />;
    },
    [rating, hover],
  );

  const stars = useMemo(() => Array.from({ length: 5 }, (_, index) => index + 1), []);

  return (
    <div className="flex items-center space-x-1">
      {stars.map((value) => (
        <div
          key={value}
          className={`relative ${isInteractive ? 'cursor-pointer' : ''} `}
          onClick={() => handleClick(value)}
          onMouseOver={(e) => handleMouseOver(e, value, false)}
          onMouseOut={handleMouseOut}
        >
          <div
            className="absolute bottom-0 left-0 top-0 w-1/2"
            onMouseOver={(e) => handleMouseOver(e, value, true)}
          ></div>
          {renderStar(value)}
        </div>
      ))}
    </div>
  );
}

export default StarRating;
