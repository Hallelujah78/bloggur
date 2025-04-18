// Store the blog posts in an array.
const articleArray = [];

// Get the title input.
const titleDOM = document.querySelector(".title-input");
// Get the text area input.
const contentDOM = document.querySelector(".content-input");
// Get the button.
const addBlogBtn = document.querySelector(".add-blog");
// Get the container for blog articles.
const blogArticleContainerDOM = document.getElementById(
  "blog-article-container"
);

// Add event listener to add button.
addBlogBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello world");
  // Create an article
  createBlog();
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
  // Create a heading for title
  const title = document.createElement("h1");
  // Create a paragraph for blog content.
  const paragraph = document.createElement("p");
  // Add title text.
  title.textContent = titleDOM.value;
  // Add blog content text.
  paragraph.textContent = contentDOM.value;
  // Append all the elements to the article.
  article.append(title, paragraph);
  // Append the article to the.
  blogArticleContainerDOM.append(article);
};
