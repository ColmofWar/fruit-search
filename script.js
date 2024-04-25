const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// function that searches through fruit variable for values that contain the string and returns and array of strings.
	let results = [];
	// results is the returned array.
	if(str === ''){
		//checks for empty string and exits function if true.
		return results;
	}

	let splitStr = str.split('');
	// splits the string entered into the function into characters or single letter long substrings.

	for (let i = 0; i < fruit.length; i++){
		// loops through fruit array.
		let splitFruit = fruit[i].split('');
		// splits fruit value string into character or single letter long substrings.
		let match = false;
		// boolian used to confirm a match.

		for(let splitFruitIndex = 0; splitFruitIndex < splitFruit.length; splitFruitIndex++){
			// loop to iterate through the substring of fruit (splitFruit)
			splitFruit[splitFruitIndex] = splitFruit[splitFruitIndex].toLowerCase();
			splitStr[0] = splitStr[0].toLowerCase();

			if(splitFruit[splitFruitIndex] === splitStr[0]){
				// checks for existance of the first letter in the entered string is in the current iteration of fruit letter/
				for(let splitStrIndex = 0; splitStrIndex < splitStr.length; splitStrIndex++){
					// loop to iterate through the substring of Str (splitStr) the entered string.  This is to check for subsequent matches after the first letter match.
					splitStr[splitStrIndex] = splitStr[splitStrIndex].toLowerCase();
				
					if(splitFruit[splitFruitIndex + splitStrIndex] !== splitStr[splitStrIndex]){
						//if subsequent letter does not match, match is false, loop ends
						match = false;
						splitStrIndex = splitStr.length;
					}else{
						//if subsequent letter does match, match is currently true, loop continues
						match = true;
					}
				}
			}
		}
		if(match === true){
			// if match is true, fruit is added to result
			results.push(fruit[i]);
		}
		if(results.length === 8){
			// if 8 matches are true, return result and end function from further searching.
			return results;
		}
	}
	return results;
}

function searchHandler(e) {
	// function triggers when key is pressed on keyboard
	// handles list suggestions by clearing list elements then populating a new list
	let suggestionsArray = [];

	suggestionsArray = search(input.value);
	// suggestionsArray = matched search values 

	suggestions.innerHTML = '';
	// clear suggestions from html
	for (let i = 0; i < suggestionsArray.length; i++){
		// loop to add matched search suggestions to html
		showSuggestions(suggestionsArray, i);
	}
}

function showSuggestions(results, inputVal) {
	// function to add "li" element to html with the fruit suggestion
	const newLi = document.createElement("li");

		newLi.innerText = results[inputVal];
		suggestions.append(newLi);
	
}

function useSuggestion(e) {
	// function triggered when click event happens on "li" element
	// populates text box with selected suggestion and clears list elements
	selected = e.target.textContent;
	input.value = selected;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);