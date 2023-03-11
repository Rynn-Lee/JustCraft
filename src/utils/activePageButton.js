export const activePageButton = (clickedPage) => {
  const pageButtons = document.querySelectorAll(".navbar-button")

  pageButtons.forEach(button => {
    button.classList.remove("active-page")
  });
  console.log("Clicked page: ", clickedPage)
  if(!clickedPage){
    clickedPage = "/" + window.location.pathname.split("/")[1]
    console.log("Clicked page: ", clickedPage)
  }

  switch(clickedPage){
    case "/": pageButtons[0].classList.add("active-page"); break;
    case "/modpacks": pageButtons[1].classList.add("active-page"); break;
    case "/about": pageButtons[2].classList.add("active-page"); break;
    case "/journal": pageButtons[3].classList.add("active-page"); break;
  }
}