document
  .getElementById("new-post-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    var blogPosts = document.getElementById("blog-posts");

    var newPost = document.createElement("div");
    newPost.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";

    blogPosts.insertBefore(newPost, blogPosts.firstChild);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  });
  const form = document.getElementById('new-post-form');
  form.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Get the form data
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    // Send the form data to the server
    fetch('/store-post', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur
      console.error(error);
    });
  });
  