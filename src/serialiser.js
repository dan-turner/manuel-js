import yaml from 'js-yaml';

export function deserialise(format, content) {
  if (format === 'yml' || format === 'yaml') {
    return yaml.load(content);
  } else if (format === 'json') {
    return JSON.parse(content);
  }
  throw `Unsupported format ${format}`;
}

export function serialise(format, variables) {
  if (format === 'yml' || format === 'yaml') {
    return yaml.dump(variables);
  } else if (format === 'json') {
    return JSON.stringify(variables, null, 2);
  }
  throw `Unsupported format ${format}. Only 'yaml' and 'json' are supported.`;
}
