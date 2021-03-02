let count = 1;
let navBarStatus = false;
let colorStatus = 0;
let cardStatus = false;

function functionnality1bis() {
  let footer = document.querySelector("footer.text-muted");
  footer.addEventListener("click", function(){
    console.log("clique " + count);
    count ++;
  });
}

function functionnality2() {
  let navBarHeader = document.getElementById("navbarHeader");
  let navBarBtn = document.querySelector("button.navbar-toggler");
  navBarBtn.addEventListener("click", function() {
    navBarHeader.classList.toggle("collapse");
  });
}
  
function functionnality3() {
  let textCard1 = document.querySelector("p.card-text");
  let btnEditCard1 = document.querySelector("button.btn.btn-sm.btn-outline-secondary");
  btnEditCard1.addEventListener("click", function() {
    textCard1.style.color = "red";
  });
}

function functionnality4() {
  let textCard2 = document.querySelectorAll("p.card-text")[1];
  let btnEditCard2 = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[1];
  btnEditCard2.addEventListener("click", function() {
    if(colorStatus == 0) {
      textCard2.style.color = "red";
      colorStatus ++;
    }
    else if(colorStatus == 1) {
      textCard2.style.color = "green";
      colorStatus ++;
    }
    else if (colorStatus == 2) {
      textCard2.style.color = "black";
      colorStatus = 0;
    }
  });
}

function functionnality5() {
  let navBarHeader = document.querySelector("div.navbar.navbar-dark.bg-dark.box-shadow");
  console.log(navBarHeader);
  let linkHead = document.querySelector("link");
  navBarHeader.addEventListener("dblclick", function() {
    console.log("double clic");
    if(navBarStatus == false) {
      linkHead.href = "";
      navBarStatus = true;
    }
    else if (navBarStatus == true) {
      linkHead.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
      navBarStatus = false;
    }
  });
}

function functionnality6() {
  let btnViewCards = document.querySelectorAll("button.btn.btn-sm.btn-success");
  console.log(btnViewCards);
  
  let imgCards = document.querySelectorAll("img.card-img-top");
  console.log(imgCards);
  
  let textCards = document.querySelectorAll("p.card-text");
  console.log(textCards.length);
  for (let i = 0 ; i < textCards.length; i ++) {
    console.log("fun6" +i);
    let text = textCards[i].innerHTML;
    btnViewCards[i].addEventListener("mouseover", function() {
      
      console.log(text);
      if(cardStatus == false) {
        imgCards[i].style.width = "80%";
        imgCards[i].style.eigth = "80%";
        textCards[i].innerText = "";
        cardStatus = true;
        console.log("mouseover false");
      }
      else if (cardStatus == true) {
        console.log(text);
        imgCards[i].style.width = "100%";
        imgCards[i].style.eigth = "100%";
        textCards[i].innerText = text;
        cardStatus = false;
       console.log("mouseover true");
      }
    });
  }
}
 let cardParent = document.querySelector("div.row");
 console.log("coucou " + cardParent);
let btnGrey = document.querySelector("a.btn.btn-secondary.my-2");
console.log("coucou " + btnGrey);
/*btnGrey.addEventListener("click", function() {
  insertBefore.
});*/

//fonctionnalité 7
let greyButton = document.getElementsByClassName("btn-secondary")[0];
let rowDiv = document.getElementsByClassName("row")[1];


greyButton.addEventListener("click", function(){ 
  let lastCard = document.getElementsByClassName("row")[1].lastElementChild;
  rowDiv.insertBefore(lastCard, rowDiv.firstChild);
});
functionnality1bis();
functionnality2();
functionnality3();
functionnality4();
functionnality5();
functionnality6();
