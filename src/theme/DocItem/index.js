import React, { useEffect } from 'react';
import OriginalDocItem from '@theme-original/DocItem';

// handles injecting the google schema into the specified ID
function DocItem(props) {
  useEffect(() => {
		const philosophyFaqExists = document.getElementById("philosophy-faq");
		if (philosophyFaqExists) {
			document.querySelector("#philosophy-faq").innerHTML = window.schemaStringFAQ;
		}
  }, []);

  return (
    <OriginalDocItem {...props} />
  );
}

export default DocItem;
