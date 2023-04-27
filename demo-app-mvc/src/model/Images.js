class Images {
  constructor(id, name, imageUrl, clickCount) {
    this.id = id;
    this.imageName = name;
    this.imageUrl = imageUrl;
    this.clickCount = clickCount;
    this.clickCountValidate();
  }
  clickCountValidate() {
    if (this.clickCount < 0) {
      throw new Error("Count of clicks can not be negative");
    }
  }
}
export default Images;
