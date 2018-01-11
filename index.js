function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target")
  
}

function deepestChild() {
  let flag = true;
  let elm = document.querySelector("div#grand-node")
  while (flag === true) {
    if(elm.firstElementChild) {
      elm = elm.firstElementChild
    } else {
      flag = false;
      return elm;
    }
  }
}

function increaseRankBy(n) {
  for(item of document.querySelector("ul.ranked-list li")) {
    item.innerHTML =
    parseInt(item.innerHTML)+n;
  }
}