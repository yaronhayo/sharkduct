
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from './StarRating';
import { Review } from './types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-lg h-full transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <StarRating rating={review.rating} />
          <span className="text-sm text-gray-500">{review.date}</span>
        </div>
        <p className="text-gray-700 mb-6">"{review.text}"</p>
        <div className="flex items-center mt-auto">
          <div className="bg-shark-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold">{review.name}</div>
            <div className="text-sm text-gray-500">{review.location}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
