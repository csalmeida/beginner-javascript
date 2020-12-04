// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);


// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const itemsContent = ['one', 'two', 'three'];

for (let index = 0; index < itemsContent.length; index++) {
  const li = document.createElement('li'); 
  li.innerText = itemsContent[index];

  list.appendChild(li);
}

// put that list into the above wrapper
div.insertAdjacentElement('afterbegin', list);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src = "https://picsum.photos/500";
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = "Cute Puppy";
// Append that image to the wrapper
div.append(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const htmlString = `
  <div>
    <p>This is DOM.</p>
    <p>DOM Cardio.</p>
  </div>
`;

const htmlStringToElement = document.createRange()
      .createContextualFragment(htmlString).
      children[0];

list.insertAdjacentElement('beforebegin', htmlStringToElement);

// add a class to the second paragraph called warning
htmlStringToElement.children[1].classList.add('warning');
// remove the first paragraph
htmlStringToElement.children[1].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  // have that function return html that looks like this:
  // <div class="playerCard">
  //   <h2>NAME — AGE</h2>
  //   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
  // </div>

  const ageInDogYears = age * 7;

  const htmlString = `
    <div>
      <h2>${name} — ${age}</h2>
      <p>They are ${height}cm tall and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
    </div>
  `;

  const card = document
        .createRange()
        .createContextualFragment(htmlString)
        .children[0];

  card.classList.add('playerCard', 'wrapper');

  return card;
}


// make a new div with a class of cards
const cards = document.createElement('div');
      cards.classList.add('cards', 'wrapper');

// make 4 player cards using generatePlayerCard
const generatedCards = [
  generatePlayerCard('Raze', 25, 1.62),
  generatePlayerCard('Sage', 28, 1.60),
  generatePlayerCard('Brimstone', 37, 1.80),
  generatePlayerCard('Killjoy', 21, 1.52)
];

// append those cards to the div
generatedCards.forEach(element => {
  cards.append(element);
});

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
generatedCards.forEach(element => {
  const button = document.createElement('button');
        button.innerText = 'Remove card';
  
  button.addEventListener('click', () => {
    element.remove();
  });

  element.append(button);
});