import Model from "../model/Model";
import AdminView from "../view/AdminView";
import ImageView from "../view/ImageView";
import ListView from "../view/ListView";

let Controller = {
  model: new Model([], null),
  constructor(DataSet) {
    this.model = new Model(DataSet, 0);
    let imageList = this.model.getImageList();
    let currImage = this.model.getCurrImage();

    ImageView.constructor();
    ImageView.render(imageList[currImage]);
    ListView.constructor();
    ListView.render(imageList);
    AdminView.constructor(imageList[currImage]);
  },
  handleImageClick() {
    this.model.incrementCounter();
    let imageList = this.model.getImageList();
    let currImage = this.model.getCurrImage();
    ImageView.render(imageList[currImage]);
    AdminView.render(imageList[currImage]);
  },
  handleImageListClick(imageId) {
    this.model.setCurrImgage(imageId);
    let imageList = this.model.getImageList();
    let currImage = this.model.getCurrImage();
    ImageView.render(imageList[currImage]);
    AdminView.render(imageList[currImage]);
  },
  handleFormSave(formData) {
    this.model.setName(formData.imageName);
    this.model.setImageUrl(formData.imageUrl);
    this.model.setCounter(formData.clickCount);
    let imageList = this.model.getImageList();
    let currImage = this.model.getCurrImage();
    ImageView.render(imageList[currImage]);
    ListView.render(imageList);
  }
};
export default Controller;
