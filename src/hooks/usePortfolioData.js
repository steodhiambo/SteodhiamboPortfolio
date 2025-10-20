import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';

export const usePortfolioData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(portfolioData);
    setLoading(false);
  }, []);

  return { data, loading };
};