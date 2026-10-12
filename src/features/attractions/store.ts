import { useState } from 'react';
import { attractions as initialAttractions } from './data.ts';
import type { AttractionsStore, DiaDanh } from './types.ts';

export function useAttractionsStore(): AttractionsStore {
  const [attractions, setAttractions] = useState<DiaDanh[]>(initialAttractions);

  function addAttraction(attraction: DiaDanh) {
    setAttractions((currentAttractions) => [...currentAttractions, attraction]);
  }

  return { attractions, addAttraction };
}
