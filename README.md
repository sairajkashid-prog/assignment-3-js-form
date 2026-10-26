# Registration Form — JavaScript Validation

Academic assignment (Full Stack Development): a single-page registration form
built with plain **HTML, CSS and vanilla JavaScript** — no frameworks or
libraries.

## What it does

`script.js` validates every field on submit and shows inline error messages:

- **Full name** — required, non-empty
- **Email** — required, regex format check
- **Phone number** — required, numeric and length check
- **Age** — required, numeric range check
- **Password / confirm password** — required and must match
- **Terms & conditions** — must be accepted

The form only submits when every check passes.

## Run it

Open `index.html` directly in any browser — no build step or server needed.

## Files

| File | Purpose |
|---|---|
| `index.html` | Form markup |
| `style.css` | Styling |
| `script.js` | Validation logic (`validateForm()`) |
