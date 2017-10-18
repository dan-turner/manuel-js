import yaml from 'js-yaml';
import fs from 'fs';
import os from 'os';

function loadPath(path) {
  if(!fs.existsSync(path)) {
    return {};
  }
  return yaml.safeLoad(fs.readFileSync(path, 'utf8'));
}

export function load(options) {
  const config = {};
  Object.assign(config, loadPath(`${os.homedir()}/.manuel.yml`));
  Object.assign(config, loadPath(`${process.cwd()}/.manuel.yml`));
  if(options.config) {
    Object.assign(config, loadPath(options.config));
    delete options.config;
  }
  if(process.env.GH_TOKEN) {
    config.githubToken = process.env.GH_TOKEN
  }
  Object.assign(config, options);
  return config;
}
