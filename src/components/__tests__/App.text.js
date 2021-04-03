import React from "react";
import { shallow } from "enzyme";

import App from "../App";
import CommentBox from "../CommentBox";

it("displays the CommentBox component", () => {
	const component = shallow(<App />);
	expect(component.find(CommentBox).length).toEqual(1);
});
