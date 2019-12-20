import * as minimist from 'minimist';
import * as path from 'path';
import * as rimraf from 'rimraf';
import {install} from 'source-map-support';
import * as util from 'util';

import {Generator} from './generator';

// enable source map support
install();
const youtubePartnerDiscoveryLink = 'https://www.googleapis.com/discovery/v1/apis/youtubePartner/v1/rest';

const argv = minimist(process.argv.slice(2));
const discoveryUrlArg = argv['discovery-url'];

const debug = true;
const gen = new Generator({debug, includePrivate: false});

async function main() {
  // console.log('Removing old APIs...');
  // const apiPath = path.join(__dirname, '../../../src/apis');
  // await util.promisify(rimraf)(apiPath);
  const discoveryUrl = discoveryUrlArg || youtubePartnerDiscoveryLink;
  console.log(`Generating API for ${discoveryUrl}`);
  await gen.generateAPI(discoveryUrl);
  console.log('Finished generating APIs!');
}
main().catch(console.error);