// Philosophy FAQ
// to add more philosophy questions just add them in this string as the first 2 and the script will do the rest
const faqPhilosophy = `{
	"protectingOurDemographics":{
		"question":"What does Destiny think about protecting our demographics?",
		"answer":"Destiny believes that this endeavor is futile because he rejects the notion that there is a consistent and coherent definition of American values"
	},
	"protestingRioting":{
		"question":"What does Destiny think about the protesting and rioting?",
		"answer":"Destiny ardently believes in people's right to protest and will always support the right to protest, even if he doesn't necessarily agree with the positions being advocated for by any particular protest."
	}
}`;

// inject string into markdown
if (typeof window !== 'undefined') {
	 function createSchema () {
		// Initialize JSON data
		let faqsPhilosophy = JSON.parse(faqPhilosophy);

		// function to iterate over the JSON
		const iterateSchemaFunction = (obj) => {
		    Object.keys(obj).forEach(key => {
				if (key === 'question' ) {
					iterateSchemaString +=`{"@type": "Question","name": "` + obj[key] + `",`;
				}
				if (key === 'answer') {
						iterateSchemaString +=`"acceptedAnswer": {"@type": "Answer","text": "` + obj[key] + `"}},`;
				}
		    if (typeof obj[key] === 'object') {
		            iterateSchemaFunction(obj[key])
		        }
		    })
		}

		let schemaString = `{"@context": "https://schema.org","@type": "FAQPage","mainEntity":[`;
			let iterateSchemaString = '';
			// iterates over the questions
			iterateSchemaFunction(faqsPhilosophy);
			// slices last ','
			iterateSchemaString = iterateSchemaString.slice(0, -1);
			schemaString += iterateSchemaString;
			schemaString += `]}`;

			return schemaString;
		}

		createSchema();

		window.schemaStringFAQ = createSchema();
	}
