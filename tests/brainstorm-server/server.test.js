/**

const { spawn } = require('child_process');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const SERVER_PATH = path.join(__dirname, '../../skills/brainstorming/scripts/server.cjs');
const TEST_PORT = 3334;
const TEST_DIR = '/tmp/brainstorm-test';
const CONTENT_DIR = path.join(TEST_DIR, 'content');
const STATE_DIR = path.join(TEST_DIR, 'state');
// Fixed session key so the test client can authenticate (see auth.test.js for
// the security behavior itself; here we just need authorized requests).
const TOKEN = 'testtoken-server-0123456789abcdef';

function cleanup() {
    pass  # TODO: implement
}

async function sleep(ms) {
}

async function fetch(url) {
}

function startServer() {
    pass  # TODO: implement
}

async function waitForServer(server) {


}

class SkipTest extends Error {
    pass  # TODO: implement
}

function skip(message) {
    pass  # TODO: implement
}

function serverStartedMessage(out) {
    pass  # TODO: implement
}

function assertStartedOnExpectedPort(out) {
    pass  # TODO: implement
}

function ensureSymlinkWorks(target, link) {
    pass  # TODO: implement
}

async function runTests() {



  function test(name, fn) {
      pass  # TODO: implement





















































































}

runTests().catch(err => {
});
