import { CompetitionResult } from '../lib/supbase';

interface ResultsTableProps {
  results: CompetitionResult[];
  loading: boolean;
}

export function ResultsTable({ results, loading }: ResultsTableProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No results available for this category yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">Position</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Student Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">School</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Score</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {results.map((result, index) => (
            <tr
              key={result.id}
              className={`hover:bg-gray-50 transition-colors ${
                index < 3 ? 'bg-yellow-50' : ''
              }`}
            >
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                    result.position === 1
                      ? 'bg-yellow-400 text-yellow-900'
                      : result.position === 2
                      ? 'bg-gray-300 text-gray-800'
                      : result.position === 3
                      ? 'bg-orange-400 text-orange-900'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {result.position}
                </span>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                {result.student_name}
              </td>
              <td className="px-6 py-4 text-gray-700">{result.school_name}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  {result.score}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
