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

	for (let i = 0; i < fruit.length; i++){
		// loops through fruit array.
		if(fruit[i].toLowerCase().includes(str.toLowerCase()) === true){
			// convert fruit value and input string to lower case and check if fruit value includes input string
			// push fruits that match search to result
			results.push(fruit[i])
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