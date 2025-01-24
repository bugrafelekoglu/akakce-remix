import { FC, HTMLAttributes } from "react";
import { Star, StarHalf } from "lucide-react";

import { cn } from "@/lib/utils";

type RatingProps = HTMLAttributes<HTMLDivElement> & {
  rating: number;
  bgColor: string;
  fgColor: string;
};

export const Rating: FC<RatingProps> = ({
  rating,
  bgColor,
  fgColor,
  className,
  ...props
}) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);

  return (
    <div className={cn("relative", className)} {...props}>
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            className="w-4 h-4"
            key={index}
            fill={bgColor}
            strokeWidth={0}
          />
        ))}
      </div>
      <div className="absolute flex gap-1 top-0 left-0">
        {Array.from({ length: fullStars }, (_, index) => (
          <Star
            className="w-4 h-4"
            key={index}
            fill={fgColor}
            strokeWidth={0}
          />
        ))}
        {Array.from({ length: halfStars }, (_, index) => (
          <StarHalf
            fill={fgColor}
            fillRule="evenodd"
            className="w-4 h-4"
            key={index}
            strokeWidth={0}
          />
        ))}
      </div>
    </div>
  );
};
