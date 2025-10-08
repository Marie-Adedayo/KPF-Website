import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { ResultsTable } from '../component/ResultsTable';
import { CompetitionResult as allResults } from '../lib/supbase';
import Header from '@/component/Header';

type Category = 'Primary' | 'Junior Secondary' | 'Senior Secondary';

function Result() {
  const [activeCategory, setActiveCategory] = useState<Category>('Primary');
  const [results, setResults] = useState<typeof allResults>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate loading delay
    const timer = setTimeout(() => {
      const filteredResults = allResults
        .filter((r) => r.category === activeCategory)
        .sort((a, b) => a.position - b.position);
      setResults(filteredResults);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const categories: Category[] = ['Primary', 'Junior Secondary', 'Senior Secondary'];

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 relative">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-16 h-16 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
               Spelling Bee &  Quiz Competition
            </h1>
            <p className="text-lg text-gray-600">Preliminary Test Results</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex flex-wrap justify-center gap-2 p-4 bg-gray-50">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-purple-600 text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {activeCategory} Category
              </h2>
              <ResultsTable results={results} loading={loading} />
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <Link to='/' >
                <p>Go back to <span className='underline text-purple-900'>Home</span></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Result;
