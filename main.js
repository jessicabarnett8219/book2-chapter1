
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const articleHeader1 = document.querySelector(".article__header");

articleHeader1.textContent = "Welcome to Jessica's Blog";

const articleHeaders = document.querySelectorAll(".article__header");

for (let i = 0; i < articleHeaders.length; i++) {
  articleHeaders[i].classList.add("important");
  console.log(articleHeaders[i]);
}

const dashed = document.querySelector(".dashed");
const dashedParentNode = dashed.parentElement;


dashedParentNode.removeChild(dashed);

const articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");
console.log(articleFooter);



