const allChildrenEl = document.querySelector('#categories').children;
console.log(`Numbers of category : ${allChildrenEl.length}`);

// const arrayOfCategoryChildrenEl = document.querySelectorAll('.item');
// console.log(arrayOfCategoryChildrenEl);

for (let i = 0; i < allChildrenEl.length; i += 1) {
  console.log(`Category: ${allChildrenEl[i].firstElementChild.textContent}
Elements: ${allChildrenEl[i].lastElementChild.children.length}`);
}
