import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

it("displays the CommentBox component", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);

	expect(div.innerHTML).toContain("Comment Box");

	ReactDOM.unmountComponentAtNode(div);
	// ^ is a bit of clean up to improve the proformance of the tests.
});
