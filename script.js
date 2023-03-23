//your code here

let bandNames = ['The Beatles', 'Led Zeppelin', 'Metallica', 'Radiohead', 'Pink Floyd', 'U2', 'The Who', 'The Rolling Stones', 'Nirvana', 'Pearl Jam'];

// remove articles from the band names
const regex = /^(a|an|the)\s/i;
bandNames = bandNames.map(name => name.replace(regex, ''));

// sort the band names in lexicographic order
bandNames.sort();

// display the sorted band names in a list
const ul = document.createElement('ul');
ul.setAttribute('id', 'band');
document.body.appendChild(ul);

bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});