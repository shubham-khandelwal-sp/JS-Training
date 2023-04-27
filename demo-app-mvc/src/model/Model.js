class Model {
  constructor(ImageList, CurrImage) {
    this.ImageList = [...ImageList];
    this.CurrImage = CurrImage;
  }
  getImageList() {
    return this.ImageList;
  }
  setCurrImgage(ImageId) {
    this.CurrImage = ImageId;
  }
  getCurrImage() {
    return this.CurrImage;
  }
  setName(ImageName) {
    this.ImageList[this.CurrImage].imageName = ImageName;
  }
  setCounter(count) {
    this.ImageList[this.CurrImage].clickCount = count;
  }
  incrementCounter() {
    this.ImageList[this.CurrImage].clickCount++;
  }
  setImageUrl(imageUrl) {
    this.ImageList[this.CurrImage].imageUrl = imageUrl;
    this.ImageList[this.CurrImage].clickCount = 0;
  }
}
export default Model;
