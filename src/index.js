import minimist from 'minimist';
import { patchFile } from './client';

async function main() {
  const args = minimist(process.argv.slice(2));
  console.log('\nManuel.JS');
  console.log('--------------------');
  console.log(`Repo: ${args.org}/${args.repo}`);
  console.log(`Branch: ${args.branch}`);
  console.log('---');
  console.log(`Author: ${args.author} <${args.email}>`);
  console.log(`Message: ${args.message}`);
  console.log(`\n-> ${args.file}`);
  await patchFile(args);
}

main().then(() => {
}).catch(err => {
  console.error(err);
  process.exit(1);
});
