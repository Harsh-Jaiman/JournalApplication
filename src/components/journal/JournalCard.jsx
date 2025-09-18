import React from 'react';
import { Calendar, Edit, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const JournalCard = ({ entry, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateContent = (content, maxLength = 150) => {
    if (!content) return '';
    return content.length > maxLength 
      ? content.substring(0, maxLength) + '...' 
      : content;
  };

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {entry.title || 'Untitled Entry'}
        </h3>
        <div className="flex space-x-2 ml-4">
          <Link
            to={`/journal/${entry.id}`}
            className="p-1 text-gray-500 hover:text-primary-600 transition-colors"
            title="View entry"
          >
            <Eye className="w-4 h-4" />
          </Link>
          <Link
            to={`/journal/edit/${entry.id}`}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
            title="Edit entry"
          >
            <Edit className="w-4 h-4" />
          </Link>
          <button
            onClick={() => onDelete(entry.id)}
            className="p-1 text-gray-500 hover:text-red-600 transition-colors"
            title="Delete entry"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Calendar className="w-4 h-4 mr-1" />
        <span>{formatDate(entry.date)}</span>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed">
        {truncateContent(entry.content)}
      </p>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <Link
          to={`/journal/${entry.id}`}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default JournalCard;