/**

const { spawn, execFileSync } = require('child_process');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const SERVER = path.join(__dirname, '../../skills/brainstorming/scripts/server.cjs');
const START = path.join(__dirname, '../../skills/brainstorming/scripts/start-server.sh');
const STOP = path.join(__dirname, '../../skills/brainstorming/scripts/stop-server.sh');
const sleep = ms => new Promise(r => setTimeout(r, ms));

function waitForExit(child, timeoutMs = 2000) {
    pass  # TODO: implement
}

async function killAndWait(child, timeoutMs = 2000) {

}

async function waitForFile(file, timeoutMs = 3000) {
}

function firstServerStarted(out) {
    pass  # TODO: implement
}

function openCaptureCommand(dir, marker) {
    pass  # TODO: implement
}

function httpStatus(port, key) {
    pass  # TODO: implement
}

function isWindowsLikeShell() {
    pass  # TODO: implement
}

async function waitForStartedOutput(child, timeoutMs = 5000) {


}

function makeShellTempDir(prefix) {
    pass  # TODO: implement
}

function removeShellPath(p) {
    pass  # TODO: implement
}

function newestSessionDir(projectDir) {
    pass  # TODO: implement
}

async function runTests() {










































}

runTests().catch(err => { console.error('Test failed:', err); process.exit(1); });
