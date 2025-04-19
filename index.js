// Store the blog posts in an array.
const articleArray = [];

// Store the page for pagination.
const pageNum = 1;

// Store num items per page.
const itemsPerPage = 8;

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
// Get the pagination container
const paginationDOM = document.getElementById("blog-pagination");

// Add event listener to add button.
formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  // Create an article
  const article = createBlog(titleDOM.value, contentDOM.value);
  // Add article to article array.
  articleArray.push(article);
  // // Reset the title input.
  // titleDOM.value = "";
  // // Reset the textarea content
  // contentDOM.value = "";
  // Render posts.

  renderPosts(itemsPerPage, articleArray, pageNum, blogArticleContainerDOM);
  // Update pagination.
  updatePaginationDisplay();
});

// Function to create new blog post.
const createBlog = (titleValue, contentValue) => {
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

  // Return the article.
  return article;
};

// Function to render blog posts.
const renderPosts = (itemsPerPage, articleArray, pageNum, container) => {
  console.log("num of articles: ", articleArray.length);
  // Clear the container before rendering.
  container.innerHTML = "";

  // Calculate the indices of the start and ending posts to render.
  const endVal = (pageNum - 1) * itemsPerPage; // pageNum 1, items 8, length 12 = 0 correct
  // if on last page
  if (pageNum === Math.ceil(articleArray.length / itemsPerPage)) {
    // render items on last page
    startValue =
      // Is the last page full?
      articleArray.length % itemsPerPage === 0
        ? endVal + itemsPerPage - 1 // start value is last item on page.
        : endVal + (articleArray.length % itemsPerPage) - 1; // start val is remaining items.
  }
  // else, we're not on last page, so render itemsPerPage items
  else {
    startValue = endVal + itemsPerPage - 1;
  }

  console.log("end val: ", endVal);
  console.log("start val: ", startValue);

  // Test.
  for (let i = startValue; i >= endVal; i--) {
    console.log(i);
    // Append the blog post to the container.
    container.append(articleArray[i]);
  }
};

// Function to update pagination display.
const updatePaginationDisplay = () => {
  // If num blog posts less than or equal to itemsPerPage, hide pagination
  if (articleArray.length <= itemsPerPage) {
    paginationDOM.classList.add("hide");
    return;
  }
  paginationDOM.classList.remove("hide");
};
