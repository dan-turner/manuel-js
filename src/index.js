import { omit } from 'lodash';
import minimist from 'minimist';
import { patchFile } from './client';
import { load } from './config';

async function main() {
  const args = minimist(process.argv.slice(2));
  delete args['_'];

  const config = load(args);

  console.log('\nManuel.JS');
  console.log('--------------------');
  console.log(`Repo: ${config.org}/${config.repo}`);
  console.log(`Branch: ${config.branch}`);
  console.log('---');
  console.log(`Author: ${config.author} <${config.email}>`);
  console.log(`Message: ${config.message}`);
  console.log(`\n-> ${config.file}`);

  await patchFile(config);
}

main().then(() => {
}).catch(err => {
  console.error(err);
  process.exit(1);
});
