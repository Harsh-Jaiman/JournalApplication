import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { journalAPI } from '../services/api';
import JournalCard from '../components/journal/JournalCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { Plus, BookOpen, Search } from 'lucide-react';

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(null);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const data = await journalAPI.getAllEntries();
      setEntries(Array.isArray(data) ? data : []);
    } catch (err) {
      setError('Failed to load journal entries');
      console.error('Error loading entries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (entryId) => {
    if (!window.confirm('Are you sure you want to delete this journal entry? This action cannot be undone.')) {
      return;
    }

    setDeleteLoading(entryId);
    try {
      await journalAPI.deleteEntry(entryId);
      setEntries(entries.filter(entry => entry.id !== entryId));
    } catch (err) {
      setError('Failed to delete journal entry');
      console.error('Error deleting entry:', err);
    } finally {
      setDeleteLoading(null);
    }
  };

  const filteredEntries = entries.filter(entry =>
    entry.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.content?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading your journal entries..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Journal</h1>
              <p className="text-gray-600 mt-2">
                {entries.length === 0 
                  ? 'Start writing your first journal entry' 
                  : `You have ${entries.length} journal ${entries.length === 1 ? 'entry' : 'entries'}`
                }
              </p>
            </div>
            <Link
              to="/journal/new"
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Entry</span>
            </Link>
          </div>

          {/* Search Bar */}
          {entries.length > 0 && (
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="input-field pl-10"
                placeholder="Search your entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Error Message */}
        <ErrorMessage message={error} onClose={() => setError('')} />

        {/* Content */}
        {entries.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No journal entries yet</h3>
            <p className="text-gray-600 mb-6">
              Start documenting your thoughts and experiences by creating your first journal entry.
            </p>
            <Link
              to="/journal/new"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Create Your First Entry</span>
            </Link>
          </div>
        ) : filteredEntries.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No entries found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or create a new entry.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntries.map((entry) => (
              <div key={entry.id} className="relative">
                <JournalCard 
                  entry={entry} 
                  onDelete={handleDelete}
                />
                {deleteLoading === entry.id && (
                  <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
                    <LoadingSpinner size="sm" text="Deleting..." />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;