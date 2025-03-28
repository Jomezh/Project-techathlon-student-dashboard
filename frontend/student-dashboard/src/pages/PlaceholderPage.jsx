import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

// Simple placeholder page component
function PlaceholderPage({ title }) {
  return (
    <Card>
      <h3>{title || 'Page Under Construction'}</h3>
      <p>This page is not yet implemented.</p>
      <br />
      <Link to="/">Go back to Dashboard</Link>
    </Card>
  );
}

export default PlaceholderPage;