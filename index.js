// Store the blog posts in an array.
const articleArray = [];

// Get the title input.
const titleDOM = document.querySelector(".title-input");
// Get the text area input.
const contentDOM = document.querySelector(".content-input");
// Get the button.
const addBlogBtn = document.querySelector(".add-blog-btn");
// Get the container for blog articles.
const blogArticleContainerDOM = document.getElementById(
  "blog-article-container"
);
// Get the form
const formDOM = document.getElementById("blog-input-form");

// Add event listener to add button.
formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  // Create an article
  createBlog();
});

// Create new blog post function
const createBlog = () => {
  // get the title from form.
  const titleValue = titleDOM.value;
  // get the content from the form textarea.
  const contentValue = contentDOM.value;
  // Empty check.
  if (titleValue === "" || contentValue === "") {
    // if values are empty, warn user they must input title and content.
  }

  // create the article
  const article = document.createElement("article");
  // set article class name
  article.className = "blog-article";
  // Create a heading for title
  const title = document.createElement("h1");
  // Create a paragraph for blog content.
  const paragraph = document.createElement("p");
  // Add title text.
  title.textContent = titleValue;
  // Add blog content text.
  paragraph.textContent = contentValue;
  // Append all the elements to the article.
  article.append(title, paragraph);
  // Append the article to the.
  blogArticleContainerDOM.append(article);
};
