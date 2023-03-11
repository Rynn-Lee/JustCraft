export const activePageButton = (clickedPage) => {
  const pageButtons = document.querySelectorAll(".navbar-button")
  const bgForButtons = document.getElementById("background-for-buttons")

  pageButtons.forEach(button => {
    button.classList.remove("active-page")
  });
  console.log("Clicked page: ", clickedPage)

  if(!clickedPage){
    clickedPage = "/" + window.location.pathname.split("/")[1]
    console.log("Clicked page: ", clickedPage)
  }
  
  switch(clickedPage){
    case "/":
      pageButtons[1].classList.add("active-page");
      bgForButtons.style.translate = "5px"
      break;
    case "/modpacks":
      pageButtons[2].classList.add("active-page");
      bgForButtons.style.translate = "152px"
      break;
    case "/about":
      pageButtons[3].classList.add("active-page");
      bgForButtons.style.translate = "293px"
      break;
    case "/journal":
      pageButtons[4].classList.add("active-page");
      bgForButtons.style.translate = "432px"
      break;
  }
}