module.exports.scrollTo = (index) => {
  const about = document.querySelector('#about');
  const sectiona = document.querySelector('#sectiona');
  const sectionb = document.querySelector('#sectionb');
  const sectionc = document.querySelector('#sectionc');
  const sectiond = document.querySelector('#sectiond');

  
  const domArray = [about, sectiona, sectionb, sectionc, sectiond];
  domArray[index].scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
};
