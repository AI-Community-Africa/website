import React from 'react';

function Blog() {
  return (
    <div>
      <h1>Community Blog</h1>
      <div>
        {/* Blog Post 1 */}
        <div>
          <h2>Blog Post 1</h2>
          <p>Author: John Doe</p>
          <p>Date: January 1, 2022</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet porttitor lorem, at fringilla dolor interdum quis. Sed
            pulvinar risus sed nisl dignissim, eu laoreet odio ultricies. Sed
            luctus dolor et interdum tristique.
          </p>
        </div>

        {/* Blog Post 2 */}
        <div>
          <h2>Blog Post 2</h2>
          <p>Author: Jane Smith</p>
          <p>Date: February 15, 2022</p>
          <p>
            Fusce ut velit enim. Suspendisse potenti. In hac habitasse platea
            dictumst. Phasellus molestie, mi sit amet molestie volutpat, velit
            dolor viverra ante, vel congue justo ex vel urna.
          </p>
        </div>

        {/* Blog Post 3 */}
        <div>
          <h2>Blog Post 3</h2>
          <p>Author: Alex Johnson</p>
          <p>Date: March 30, 2022</p>
          <p>
            Proin eleifend sollicitudin risus id tristique. Nam aliquam cursus
            purus sed tempus. Integer id neque ac ex feugiat eleifend.
            Curabitur pharetra eleifend felis a placerat.
          </p>
        </div>

        {/* Add more blog posts as needed */}
      </div>
      <footer>
        <p>&copy; 2023 AI Community Africa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Blog;
