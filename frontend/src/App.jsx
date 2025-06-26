import React from 'react';

function Sidebar() {
  return (
    <div style={{ width: 250, background: '#f5f5f5', height: '100vh', padding: 16 }}>
      <h2>Subjects</h2>
      {/* Subject/module tree will go here */}
    </div>
  );
}

function MainContent() {
  return (
    <div style={{ flex: 1, padding: 24 }}>
      <h1>StudyMate Pro</h1>
      {/* Chat, flashcards, summary, etc. will go here */}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainContent />
    </div>
  );
} 