
const tag = document.querySelector('.tag');
const tagDescription = document.querySelector('.description');
const tagSample = document.querySelector('.sample');
const previousBtn = document.querySelector('.previous');
const againBtn = document.querySelector('.again');
const nextBtn = document.querySelector('.next');


let currentIndex = 0;

const infoArr = [
  {tagName: '<h2></h2>', tagDescription: 'Heading level 2', tagSample: '<h2>Heading 2</h2>'},
  {tagName: '<h4></h4>', tagDescription: 'Heading level 4', tagSample: '<h4>Heading 4</h4>'},
  {tagName: '<p></p>', tagDescription: 'Paragraph', tagSample: '<p>paragraph 3</p>'},
  {tagName: '<a></a>', tagDescription: 'Set internal/external links', tagSample: '<a href="http://google.com">'},
  {tagName: '<button></button>', tagDescription: 'Create a button', tagSample: '<button>Click Me</button>'},
  {tagName: '<code></code>', tagDescription: 'Sets your text as a code snippet', tagSample: '<code>Code Snippet</code>'},
  {tagName: '<nav></nav>', tagDescription: 'Use for navigation items', tagSample: '<nav><p>Item1</p><p>Item2</p></nav>'},
  {tagName: '<image>', tagDescription: 'Sets image in your project', tagSample: '<image src="/image_path">'},
  {tagName: '<script></script>', tagDescription: 'Adds JavaScript to your project', tagSample: '<script src="main.js"></script>'}
];


previousBtn.addEventListener('click', previousBtnHandler);
againBtn.addEventListener('click', againHandler);
nextBtn.addEventListener('click', nextBtnHandler);


function init() {

  againBtn.style.visibility = 'hidden';
  previousBtn.style.visibility = 'hidden';

  tag.textContent = infoArr[currentIndex].tagName;
  tagDescription.textContent = infoArr[currentIndex].tagDescription;
  tagSample.textContent = infoArr[currentIndex].tagSample;
}

init();



function previousBtnHandler(event) {

  currentIndex--;
  setInfo(currentIndex);
  previousBtnVisability();
}

function againHandler(event) {

  setInfo(0);
  currentIndex = 0;
  setBtnVisibility('hidden', 'hidden', 'visible');
}

function nextBtnHandler(event) {

  currentIndex++;
  setInfo(currentIndex);
  again();
  previousBtnVisability(); 
}



function setInfo(index) {
  tag.textContent = infoArr[index].tagName;
  tagDescription.textContent = infoArr[index].tagDescription;
  tagSample.textContent = infoArr[index].tagSample;
}

function again() {

  if(currentIndex === infoArr.length - 1){
    currentIndex = 0;
    setBtnVisibility('hidden', 'visible', 'hidden');
  }
}

function setBtnVisibility(previousBtnVisbl, againBtnVisbl, nextBtnVisbl) {
  previousBtn.style.visibility = previousBtnVisbl;
  againBtn.style.visibility = againBtnVisbl;
  nextBtn.style.visibility = nextBtnVisbl;
}

function previousBtnVisability() {

  if (currentIndex > 0){
    previousBtn.style.visibility = 'visible';
  } else {
    previousBtn.style.visibility = 'hidden';
  }
  console.log('previousBtnVisability');
}
