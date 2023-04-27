import Controller from "../controller/Controller";

let ImageView = {
  constructor() {
    let container = document.querySelector(".app");
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");
    container.appendChild(imageDiv);
    this.attachEventListener();
  },
  render(imageObj) {
    let imageDiv = document.querySelector(".image-div");

    // Upper text name with count
    let titleDiv = document.createElement("div");

    let imageName = imageObj.imageName;
    let imageClicks = imageObj.clickCount;
    let displayText = `${imageName}: ${imageClicks} clicks`;
    let textNode = document.createTextNode(displayText);

    titleDiv.appendChild(textNode);

    // Image display
    let imageCon = document.createElement("img");
    imageCon.setAttribute("src", imageObj.imageUrl);
    imageCon.setAttribute("data-imageid", imageObj.id);

    // Changing the imageDiv with this data
    imageDiv.innerHTML = "";
    imageDiv.appendChild(titleDiv);
    imageDiv.appendChild(imageCon);
  },
  attachEventListener() {
    let imageDiv = document.querySelector(".image-div");
    imageDiv.addEventListener("click", (event) => {
      if (event.target.tagName === "IMG") {
        Controller.handleImageClick();
      }
    });
  }
};
export default ImageView;
