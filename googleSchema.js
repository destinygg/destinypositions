// Philosophy FAQ
// to add more philosophy questions just add them in this json as the first 2 and the script will do the rest
var faqPhilosophy = {
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

// Initialize JSON array and data
var faqsPhilosophy = faqPhilosophy.faqs;
faqsPhilosophy = JSON.stringify(faqsPhilosophy);
faqsPhilosophy = JSON.parse(faqsPhilosophy);

var string = `{"@context": "https://schema.org","@type": "FAQPage","mainEntity":[`;

var iterateString = '';
// iterates over the questions
Object.values(faqsPhilosophy).filter(faqsPhilosophy =>
	iterateString += `{"@type": "Question","name": "` + faqsPhilosophy.question + `","acceptedAnswer": {"@type": "Answer","text": "` + faqsPhilosophy.answer + `"}},`
);

//slices last ','
iterateString = iterateString.slice(0, -1);

string += iterateString;
string += `]}`;

// inject string into markdown
window.onload = function(){
	const elementExists = document.getElementById("philosophy-faq");
	if (elementExists) {
		document.querySelector("#philosophy-faq").innerHTML = string;
	}
};


//TODO add recurring interval when switching location href, find a better way than calling an interval every 500 ms
var currentPage = location.href;
setInterval(function()
{
	if (currentPage != location.href)
	{
		const elementExists = document.getElementById("philosophy-faq");
		if (elementExists) {
			document.querySelector("#philosophy-faq").innerHTML = string;
		}
	}
}, 500);
