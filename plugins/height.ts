const height = () => {
  let windowHeight = 0;
  windowHeight = window.innerHeight;
  return windowHeight;
};

export default ({}, inject: any) => {
  inject("height", height);
};
