import Controller from "../controller/Controller";

let AdminView = {
  constructor(imageObj) {
    let container = document.querySelector(".app");
    let adminDiv = document.createElement("div");
    adminDiv.classList.add("admin-div");
    container.appendChild(adminDiv);

    // Creating the admin button
    const adminButton = document.createElement("button");
    adminButton.setAttribute("value", "Admin");
    adminButton.classList.add("admin-btn");
    adminButton.innerHTML = "Admin";

    // Creating the form
    let form = document.createElement("form");
    form.setAttribute("method", "post");

    // Image Name component
    let imageNameLabel = document.createElement("label");
    imageNameLabel.innerText = "Image Name:";
    imageNameLabel.setAttribute("for", "name");

    let imageNameInput = document.createElement("input");
    imageNameInput.setAttribute("type", "text");
    imageNameInput.setAttribute("value", imageObj.imageName);
    imageNameInput.setAttribute("data-imageId", imageObj.id);
    imageNameInput.setAttribute("id", "image-name");

    let br = document.createElement("br");
    form.appendChild(imageNameLabel);
    form.appendChild(imageNameInput);
    form.appendChild(br.cloneNode());

    // Image URL Component
    let imageUrlLabel = document.createElement("label");
    imageUrlLabel.innerText = "Image URL:";
    imageUrlLabel.setAttribute("for", "url");

    let imageUrlInput = document.createElement("input");
    imageUrlInput.setAttribute("type", "text");
    imageUrlInput.setAttribute("value", imageObj.imageUrl);
    imageUrlInput.setAttribute("data-key", imageObj.id);
    imageUrlInput.setAttribute("id", "image-url");

    form.appendChild(imageUrlLabel);
    form.appendChild(imageUrlInput);
    form.appendChild(br.cloneNode());

    // Image Click Count Component
    let imageClickCountLabel = document.createElement("label");
    imageClickCountLabel.innerText = "Clicks:";
    imageClickCountLabel.setAttribute("for", "clicks");

    let imageClickInput = document.createElement("input");
    imageClickInput.setAttribute("type", "text");
    imageClickInput.setAttribute("value", imageObj.clickCount);
    imageClickInput.setAttribute("data-key", imageObj.id);
    imageClickInput.setAttribute("id", "image-clicks");

    form.appendChild(imageClickCountLabel);
    form.appendChild(imageClickInput);
    form.appendChild(br.cloneNode());

    // Save Button
    let saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.setAttribute("value", "Save");
    saveButton.setAttribute("type", "button");
    saveButton.classList.add("save-btn");
    form.append(saveButton);

    // Appending this to adminDiv
    adminDiv.innerHTML = "";
    adminDiv.appendChild(adminButton);
    adminDiv.appendChild(form);

    container.appendChild(adminDiv);
    this.attachEventListeners();
  },
  render(imageInfo) {
    document.forms[0].reset();

    let name = document.getElementById("image-name");
    name.setAttribute("value", imageInfo.imageName);
    let url = document.getElementById("image-url");
    url.setAttribute("value", imageInfo.imageUrl);
    let counter = document.getElementById("image-clicks");
    counter.setAttribute("value", +imageInfo.clickCount);
  },
  attachEventListeners() {
    // Adding event listener to
    let adminDiv = document.querySelector(".admin-div");
    let adminButton = adminDiv.firstChild;
    adminButton.addEventListener("click", (event) => {
      let target = event.target;
      if (target.tagName === "BUTTON" && target.value === "Admin") {
        let form = document.getElementsByTagName("form")[0];
        let visibility = form.style.visibility;
        form.style.visibility = visibility === "visible" ? "hidden" : "visible";
      }
    });

    // Adding event listener to submit button in form
    let imagename = document.getElementById("image-name");
    let imageUrl = document.getElementById("image-url");
    let clickCount = document.getElementById("image-clicks");

    let saveButton = document.querySelector(".save-btn");
    saveButton.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        let obj = {
          imageName: imagename.value,
          imageUrl: imageUrl.value,
          clickCount: +clickCount.value
        };
        Controller.handleFormSave(obj);
      }
    });
  }
};
export default AdminView;
