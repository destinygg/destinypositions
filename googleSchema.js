// Philosophy FAQ
// to add more philosophy questions just add them in this json as the first 2 and the script will do the rest

const faqPhilosophy = {
	"faqs": {
		"protectingOurDemographics": {
			"question": "What does Destiny think about protecting our demographics?",
			"answer": "Destiny believes that this endeavor is futile because he rejects the notion that there is a consistent and coherent definition of American values",
		},
		"protestingRioting": {
			"question": "What does Destiny think about the protesting and rioting?",
			"answer": "Destiny ardently believes in people's right to protest and will always support the right to protest, even if he doesn't necessarily agree with the positions being advocated for by any particular protest. ",
		},
	}
};

// inject string into markdown
if (typeof window !== 'undefined') {
	 function createSchema () {
		// Initialize JSON array and data
		let faqsPhilosophy = faqPhilosophy.faqs;
		faqsPhilosophy = JSON.stringify(faqsPhilosophy);
		faqsPhilosophy = JSON.parse(faqsPhilosophy);
		let schemaString = `{"@context": "https://schema.org","@type": "FAQPage","mainEntity":[`;
			let iterateSchemaString = '';
			// iterates over the questions
			Object.values(faqsPhilosophy).filter(faqsPhilosophy =>
				iterateSchemaString += `{"@type": "Question","name": "` + faqsPhilosophy.question + `","acceptedAnswer": {"@type": "Answer","text": "` + faqsPhilosophy.answer + `"}},`
			);
			//slices last ','
			iterateSchemaString = iterateSchemaString.slice(0, -1);
			schemaString += iterateSchemaString;
			schemaString += `]}`;

			return schemaString;
		}

		createSchema();

		const schemaString = createSchema();

		//checks if the script element is present on the page
		window.onload = function(){
			const elementExists = document.getElementById("philosophy-faq");
			if (elementExists) {
				document.querySelector("#philosophy-faq").innerHTML = schemaString;
			}
		};

		//checks if the client has changed link
		let schemaPushState = history.pushState;
		history.pushState = function () {
			schemaPushState.apply(history, arguments);
			const elementExists = document.getElementById("philosophy-faq");
			if (elementExists) {
				document.querySelector("#philosophy-faq").innerHTML = schemaString;
			}
		};

	}
