import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {youtubePartner_v1} from './v1';

export const VERSIONS = {
    v1: youtubePartner_v1.Youtubepartner,
};

export function youtubePartner(
    version: 'v1'
): youtubePartner_v1.Youtubepartner;
export function youtubePartner(
    options: youtubePartner_v1.Options
): youtubePartner_v1.Youtubepartner;
export function youtubePartner<T = youtubePartner_v1.Youtubepartner>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1' | youtubePartner_v1.Options
) {
    return getAPI<T>('youtubePartner', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};