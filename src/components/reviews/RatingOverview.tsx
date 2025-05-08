
import React from 'react';
import StarRating from './StarRating';

interface RatingOverviewProps {
  rating: string;
  reviewCount: string;
}

const RatingOverview = ({ rating, reviewCount }: RatingOverviewProps) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center mb-6">
        <div className="text-4xl font-bold text-shark-blue mr-2">{rating}</div>
        <StarRating rating={5} size="md" />
      </div>
      <p className="text-gray-600 mb-6">Based on {reviewCount} verified customer reviews</p>
    </div>
  );
};

export default RatingOverview;
