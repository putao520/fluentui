// @ts-check

const { spawnSync } = require('child_process');
const prompts = require('prompts');
const getAllPackageInfo = require('./monorepo/getAllPackageInfo');
const allPackages = getAllPackageInfo();
const extraArgs = process.argv.slice(2);

const defaults = ['office-ui-fabric-react', '@fluentui/docs'];

const projectsWithStartCommand = Object.entries(allPackages)
  .map(([pkg, info]) => {
    if (info.packageJson.scripts && info.packageJson.scripts.start) {
      return { title: pkg, value: pkg };
    }

    return null;
  })
  .filter(n => n && !defaults.includes(n.title))
  .sort((a, b) => (a.title === b.title ? 0 : a.title > b.title ? 1 : -1));

const suggest = (input, choices) => Promise.resolve(choices.filter(i => i.title.includes(input)));

(async () => {
  const response = await prompts({
    type: 'autocomplete',
    name: 'project',

    message: 'Which project to start (select or type partial name)?',
    suggest,
    choices: [...defaults.map(p => ({ title: p, value: p })), ...projectsWithStartCommand],
  });

  spawnSync('yarn', ['workspace', response.project, 'start', ...(extraArgs.length > 0 ? [extraArgs] : [])], {
    shell: true,
    stdio: 'inherit',
  });
})();
