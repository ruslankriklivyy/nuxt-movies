const numberConvert = (number: string | number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default numberConvert;
