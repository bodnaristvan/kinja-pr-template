/* global document */

// PR description textarea
var descriptionTextfield = document.getElementById('pull_request_body'),
	// questions
	prQuestions = [
		'### What does this PR do? How does it affect users?',
		'### How should this be tested (feature switches, URLs, special user permissions)?',
		'### Related Trello card, wiki page or blog posts'
	];

if (descriptionTextfield) {
	if (descriptionTextfield.value) {
		// if the textarea already contains some text, add a new line, and insert the questions
		descriptionTextfield.value += '\n\n' + prQuestions.join('\n\n') + '\n';
	} else {
		// otherwise just add the questions
		descriptionTextfield.value = prQuestions.join('\n\n') + '\n';
	}
}
