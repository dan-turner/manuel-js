import GitHubApi from 'github';
import yaml from 'js-yaml';
import jsondiff from 'jsondiffpatch';
import formatDiff from 'jsondiffpatch/src/main';
import { cloneDeep, get, set, isEqual } from 'lodash';

const github = new GitHubApi();


export async function patchFile(options) {
  github.authenticate({
    type: 'oauth',
    token: options.githubToken
  });

  const getResponse = await github.repos.getContent({
    owner: options.org,
    repo: options.repo,
    ref: options.branch,
    path: options.file,
  });

  const originalContent = Buffer.from(getResponse.data.content, 'base64').toString('utf8');

  const variables = yaml.safeLoad(originalContent);

  const newVariables = cloneDeep(variables);

  const originalValue = get(variables, options.path);

  //Update image tag
  set(newVariables, options.path, options.value);

  const delta = jsondiff.diff(variables, newVariables);

  if(isEqual(variables, newVariables)) {
    console.log(`\nNo change to be made!`);
  } else {
    console.log('```');
    jsondiff.console.log(delta);
    console.log('```');

    const newContent = yaml.safeDump(newVariables);
    const encodedContent = Buffer.from(newContent).toString('base64');

    const author = {
      name: options.author,
      email: options.email
    };

    const updateResponse = await github.repos.updateFile({
      owner: options.org,
      repo: options.repo,
      branch: options.branch,
      path: options.file,
      content: encodedContent,
      sha: getResponse.data.sha,
      author: author,
      committer: author,
      message: options.message
    });

    console.log('---');
    console.log(`Commit: ${updateResponse.data.commit.html_url}`);
  }
}
