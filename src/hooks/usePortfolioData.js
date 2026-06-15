import portfolioData from '../data/portfolio.json';

export const usePortfolioData = () => {
  return { data: portfolioData, loading: false };
};
