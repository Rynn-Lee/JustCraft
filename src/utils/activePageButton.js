export const activePageButton = (clickedPage = 1) => {
  const pageButtons = document.querySelectorAll(".navbar-button")
  const bgForButtons = document.getElementById("background-for-buttons")
  let buttonsBoundings = {}
  let page = clickedPage
  
  if(!page){
    page = "/" + window.location.pathname.split("/")[1]
    console.log("Clicked page: ", page)
  }
  
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
      "width":pageButtons[page].getBoundingClientRect().width-50 + "px",
      "left": pageButtons[page].getBoundingClientRect().left + "px"
    }
  }

  const applyStyles = () => {
    pageButtons[page].classList.add("active-page");
    bgForButtons.style.translate = buttonsBoundings.left
    bgForButtons.style.width = buttonsBoundings.width
  }

  clearStyles()
  getBounding()
  applyStyles()
}