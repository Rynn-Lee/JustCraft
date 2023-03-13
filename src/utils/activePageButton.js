export const activePageButton = (clickedPage) => {
  const pageButtons = document.querySelectorAll(".navbar-button")
  const bgForButtons = document.getElementById("background-for-buttons")
  let buttonsBoundings, buttonPositioning = {}

  const pages = {
    "": 1,
    "modpacks": 2,
    "about": 4,
    "journal": 5,
    "login": 6
  }
  
  let page = clickedPage
  if(!page){
    page = pages[window.location.pathname.split("/")[1]]
    console.log("Clicked page: ", page)
  }

  setTimeout(() => {
    bgForButtons.style.transition = 200 + "ms"
  }, 200)
  
  window.onresize = () => {
    setTimeout(()=>{
      clearStyles()
      getBounding()
      applyStyles()
    }, 100);
  }

  const clearStyles = () => {
    pageButtons.forEach(button => {
      button.classList.remove("active-page")
    });
  }

  const getBounding = () => {
    buttonsBoundings = {
      "width":pageButtons[page].getBoundingClientRect().width,
      "left": pageButtons[page].getBoundingClientRect().left-5,
      "top": pageButtons[page].getBoundingClientRect().top
    }
    buttonPositioning = {
      "center": (buttonsBoundings.left + (buttonsBoundings.width/2)) + "px",
      "padding": `10px ${buttonsBoundings.width/2}px 10px ${buttonsBoundings.width/2}px`
    }
  }

  const applyStyles = () => {
    pageButtons[page].classList.add("active-page");
    bgForButtons.style.transform = `translate(${buttonsBoundings.left + "px"},${buttonsBoundings.top + "px"})`
    bgForButtons.style.padding = buttonPositioning.padding
  }

  clearStyles()
  getBounding()
  applyStyles()
}