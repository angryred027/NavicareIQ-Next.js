import React, { FC } from 'react';
import FavoriteCard from './favorite-card';
import { Card } from '@/components/common';

const FavoriteContainer: FC = () => {
  return (
    <Card className="flex gap-[8px] overflow-x-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <FavoriteCard key={index} title="Quantitative hCG Pregnancy" subtitle="LabCorp" bookmarked price="80" />
      ))}
    </Card>
  );
};

export default FavoriteContainer;
