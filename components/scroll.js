module.exports.scrollTo = (index) => {
  const about = document.querySelector('#about');
  const section2 = document.querySelector('#section2');
  const section3 = document.querySelector('#section3');
  const section4 = document.querySelector('#section4');
  const section5 = document.querySelector('#section5');

  const domArray = [about, section2, section3, section4, section5];
  domArray[index].scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
};
