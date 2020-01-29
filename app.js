const http = new easyHTTP();
// Create data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

/*
// GET Posts
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// GET Single Posts
http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});


//Create Post
http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});


// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
    if (err) {
        console.log(err);
      } else {
        console.log(post);
      } 
});

console.log(http);

*/

// Delete post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});