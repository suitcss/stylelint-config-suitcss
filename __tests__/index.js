import config from "../";
import fs from "fs";
import stylelint from "stylelint";

const validCss = fs.readFileSync(`${__dirname}/valid.css`, "utf-8");

const invalidCss = (
`a {}
`);

test("no warnings with valid css", () =>
  stylelint.lint({
    code: validCss,
    config,
  })
  .then(data => {
    const { errored, results } = data;
    const { warnings } = results[0];

    expect(errored).toBeFalsy();
    expect(warnings).toHaveLength(0);
  })
);

test("a warning with invalid css", () =>
  stylelint.lint({
    code: invalidCss,
    config,
  })
  .then(data => {
    const { errored, results } = data;
    const { warnings } = results[0];

    expect(errored).toBeTruthy();
    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe("Unexpected empty block (block-no-empty)");
  })
);
