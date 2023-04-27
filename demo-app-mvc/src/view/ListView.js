import Controller from "../controller/Controller";

let ListView = {
  constructor() {
    let mainDiv = document.createElement("div");
    let rootContainer = document.querySelector(".app");
    mainDiv.classList.add("list-div");
    rootContainer.appendChild(mainDiv);
  },
  render(imageList) {
    let mainDiv = document.querySelector(".list-div");
    mainDiv.innerHTML = "";

    // Adding each image as seperate element to work
    for (let imageInfo of imageList) {
      let listElement = document.createElement("li");
      listElement.textContent = imageInfo.imageName;
      listElement.setAttribute("data-imageId", imageInfo.id);
      listElement.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
          let imageId = event.target.getAttribute("data-imageId");
          Controller.handleImageListClick(+imageId);
        }
      });
      mainDiv.appendChild(listElement);
    }
  }
};
export default ListView;
