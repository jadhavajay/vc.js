import * as vcjs from '../../vc-ld/index';
const unlockedDid = require('../unlocked-did.json');
const jsigs = require('jsonld-signatures');
const { Ed25519KeyPair } = require('crypto-ld');
const { Ed25519Signature2018 } = jsigs.suites;
const firstKey = unlockedDid.publicKey[0];
const key = new Ed25519KeyPair(firstKey);
const suite = new Ed25519Signature2018({
  key,
  date: '2019-12-11T03:50:55Z',
});

export default {
  name: 'Transmute',
  key,
  suite,
  vcjs,
};
