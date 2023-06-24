import React from 'react';


function Home() {
  return (
    <div className="container content justify-content-center">
      <h1>Home</h1>
      <h2>AI Community Africa</h2>
      <p>An open source AI Community with a vision of unleashing the Power of AI to Tackle Africa's Challenges.</p>
      <p>Founded by Kaddu Livingstone</p>

      <section>
        <h2>Get Started</h2>
        <p>Join our community today and embark on an exciting AI journey!</p>
        <a href="/register" className="btn btn-primary">Sign Up Now</a>
      </section>
      
      <footer>
        <p>&copy; 2023 AI Community Africa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
