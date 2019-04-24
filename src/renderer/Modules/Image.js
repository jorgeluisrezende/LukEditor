import fs from 'fs';

export const decode = (path) => {
  const imageBuffer = fs.readFileSync(path);
  const image = new Image();
  image.src = `data:image/*;base64,${imageBuffer.toString('base64')}`;
  return image;
};

export default decode;
