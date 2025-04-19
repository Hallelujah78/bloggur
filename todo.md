# Project statement

You have been hired to help develop a blogging website. They would like to have the following client-side functionality:
● The ability to make new blog posts:
○ The new posts should be below the old posts but above the New Blog form.
○ The input fields should be cleared upon submission.
● If there are many blog posts, to enable “pagination” to allow for easy navigation.
○ Pagination is dividing the content to display it on different pages, with the ability to
navigate between the pages.
● It is critically important that you follow good coding practice, so
remember:
○ Descriptive variable names
○ Good comments
■ Explaining what the code does
■ Explaining why the code is structured this way
○ Well formatted and structured code

---

# ToDo

- as a user, I can add a new blog post.
- new post is below old posts, but above the FORM
  - if we use a data structure that maintains order we don't have to timestamp each blog post.
- input fields cleared on submission **DONE**

- pagination element that is hidden if number of posts don't

# 18-4-25

## Thinking About Pagination

- we have given values: the length of an array containing articles, the page number, the items to display per page.
- blogs are displayed in reverse order.

### Worked example 1:

articleArray.length = 4, pageNum = 1, itemsPerPage = 8

startingBlog = (articleArray.length % itemsPerPage) * pageNum - 1
= (4 % 8)*1-1 = 3.
CORRECT

### Worked example 2:

articleArray.length = 12, pageNum = 2, itemsPerPage = 8
(articleArray.length % itemsPerPage) * pageNum - 1
= (12 % 8)*2-1 = 7.
CORRECT

### Worked example 3:

- Add items until we have 8 items, 0-7
  articleArray.length = 12, pageNum = 2, itemsPerPage = 8
  (articleArray.length % itemsPerPage) * pageNum - 1
  = (12 % 8)*2-1 = 7.
  CORRECT

Ending Value
i>=(pageNum-1)_itemsPerPage: 1-1 = 0 _ 8 where pageNum is 1
i>=(pageNum-1)_itemsPerPage: 2-1 = 1 _ 8 where pageNum is 2

Starting Value given pageNum, itemsPerPage and array.length
starting value for i would be ((pageNum - 1) \* itemsPerPage) + array.length % itemsPerPage

Worked Example: 2, 8 and 12
((2-1) \* 8) + 12 % 8 = 8 + 4 = 12 (minus 1)

Worked Example: 1, 8 and 12
1-1 \* 8 = 0 + 4 = 4. incorrect.

if pageNum is less than Math.ceil(array.length/itemsPerPage), then starting value is
the end value + itemsPerPage

if pageNum is equal to Math.ceil(array.length/itemsPerpage), starting value is array.length % itemsPerPage

Worked example: 1, 8, 12

```js
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
  startVaue = endVal + itemsPerPage - 1;
}
```

- when we have 8 items it doesn't render anything, we end up with
