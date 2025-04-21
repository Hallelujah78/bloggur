// Store the blog posts in an array.
const articleArray = [];

// Store the page for pagination.
let pageNum = 1;

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
// Get the "prev" pagination element
const paginationPrev = document.querySelector(".prev");
// Get the "next" pagination element
const paginationNext = document.querySelector(".next");
// Get the pagination list.
const paginationNumberList = document.querySelector(".pagination-number-list");

// Add event listener to form.
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
  // Render pagination.
  renderPagination();
});

// Add event listener to the numbered pagination list.
paginationNumberList.addEventListener("click", (e) => {
  // Get the clicked element.
  const target = e.target;

  // update the pageNum
  pageNum = +target.id;

  // Get all list items.
  const paginationItems = document.querySelectorAll(".pag-item");

  // Remove 'current-page' class from all list items.
  for (pagItem of paginationItems) {
    pagItem.classList.remove("current-page");
  }

  // Add class to clicked element to show it is current.
  target.classList.add("current-page");

  // Render the posts.
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

  // Test.
  for (let i = startValue; i >= endVal; i--) {
    // Append the blog post to the container.
    container.append(articleArray[i]);
  }
};

// Function to update pagination display.
const updatePaginationDisplay = () => {
  // If num blog posts less than or equal to itemsPerPage, hide pagination
  if (articleArray.length <= itemsPerPage) {
    paginationDOM.classList.add("hide");
  } else {
    paginationDOM.classList.remove("hide");
  }

  // Hide or show prev.
  if (pageNum === 1) {
    paginationPrev.classList.add("hide");
  } else paginationPrev.classList.remove("hide");

  // Calc pages needed to display blog posts.
  const pagesRequired = Math.ceil(articleArray.length / itemsPerPage);

  // Hide or show next.
  if (pageNum === pagesRequired) {
    paginationNext.classList.add("hide");
  } else paginationNext.classList.remove("hide");
};

// Function to rerender pagination content
const renderPagination = () => {
  const pagesRequired = Math.ceil(articleArray.length / itemsPerPage);
  // Empty the list.
  paginationNumberList.innerHTML = "";

  for (let i = 1; i <= pagesRequired; i++) {
    paginationNumberList.append(createListItem(i));
  }
};

// Function to create list item
const createListItem = (value) => {
  // Create the list item element.
  const listItem = document.createElement("li");
  // Add a class
  listItem.classList.add("pag-item");
  // Set the text content.
  listItem.textContent = value;
  // set the id
  listItem.id = value;
  // Show that the item is currently selected if value === pageNum
  if (pageNum === value) {
    listItem.classList.add("current-page");
  }
  return listItem;
};
