export default class Canvas {
  constructor(context) {
    this.context = context;
  }

  insertImage(image) {
    return new Promise((resolve, reject) => {
      try {
        image.onload = () => {
          this.context.canvas.width = image.width;
          this.context.canvas.height = image.height;
          this.context.drawImage(image, 0, 0, image.width, image.height);
          resolve({ width: image.width, height: image.height });
        };
      } catch (error) {
        reject(error);
      }
    });
  }
}
