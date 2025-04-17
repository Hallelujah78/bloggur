// Store the blog posts in an array.
const articleArray = [];

// Get the title input.
const titleDOM = document.querySelector(".title-input");
// Get the text area input.
const contentDOM = document.querySelector(".content-input");
// Get the button.
const addBlogBtn = document.querySelector(".add-blog");

// Add event listener to add button.
addBlogBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello world");
  // Create an article
});

// console.log(contentDOM);

// Create new blog post function
const createBlog = () => {
  // get the title
  // get the content
  // create the article
  const article = document.createElement("article");
  // set article class name
  article.className = "blog-article";
};
