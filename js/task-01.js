const allChildrenEl = document.querySelector('#categories').children;
console.log(`Numbers of category : ${allChildrenEl.length}`);

const arrayOfCategoryChildrenEl = document.querySelectorAll('.item');
console.log(arrayOfCategoryChildrenEl);

console.log(`Category: ${allChildrenEl[0].firstElementChild.textContent}
Elements: ${allChildrenEl[0].lastElementChild.children.length}`);
console.log(`Category: ${allChildrenEl[1].firstElementChild.textContent}
Elements: ${allChildrenEl[1].lastElementChild.children.length}`);
console.log(`Category: ${allChildrenEl[2].firstElementChild.textContent}
Elements: ${allChildrenEl[2].lastElementChild.children.length}`);
