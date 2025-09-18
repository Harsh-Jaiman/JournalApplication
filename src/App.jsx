import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './pages/Home';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import Dashboard from './pages/Dashboard';
import JournalForm from './components/journal/JournalForm';
import JournalView from './components/journal/JournalView';
import EmailForm from './components/email/EmailForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/journal/new" element={
              <ProtectedRoute>
                <JournalForm />
              </ProtectedRoute>
            } />
            
            <Route path="/journal/edit/:id" element={
              <ProtectedRoute>
                <JournalForm />
              </ProtectedRoute>
            } />
            
            <Route path="/journal/:id" element={
              <ProtectedRoute>
                <JournalView />
              </ProtectedRoute>
            } />
            
            <Route path="/email" element={
              <ProtectedRoute>
                <EmailForm />
              </ProtectedRoute>
            } />

            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;