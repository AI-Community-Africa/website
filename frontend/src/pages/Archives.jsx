import React from 'react'

function Archives() {
  const archiveData = [
    { id: 1, title: 'Post 1', date: '2023-01-01' },
    { id: 2, title: 'Post 2', date: '2023-02-01' },
    { id: 3, title: 'Post 3', date: '2023-03-01' },
    // Add more archive data as needed
  ];
  return (
    <div>
      <h2>Archives Page</h2>
      {archiveData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Date: {item.date}</p>
        </div>
      ))}
      <footer>
        <p>&copy; 2023 AI Community Africa. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Archives
