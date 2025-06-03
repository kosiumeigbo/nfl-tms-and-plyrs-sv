const eslintCommand = (filenames) => `eslint ${filenames.join(" ")}`;
const prettierCommand = (filenames) => `prettier ${filenames.join(" ")} --write`;

export default { "*.{js,ts,svelte}": [prettierCommand, eslintCommand] };
