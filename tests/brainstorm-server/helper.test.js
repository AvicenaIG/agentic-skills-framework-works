/**

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const HELPER = path.join(__dirname, '../../skills/brainstorming/scripts/helper.js');

const src = fs.readFileSync(HELPER, 'utf-8');

// helper.js is browser code, and the repo is an ES module package, so a plain
// require() won't surface its exports. Evaluate the source in a CommonJS sandbox
// with no `window`, so only the exported pure helpers run (not the browser code).
const moduleShim = { exports: {} };
new Function('module', src)(moduleShim);
const { nextReconnectDelay, MIN_RECONNECT_MS, MAX_RECONNECT_MS, TOMBSTONE_AFTER_MS } = moduleShim.exports;

let passed = 0, failed = 0;
function test(name, fn) {
    pass  # TODO: implement
}

console.log('\n--- Backoff (pure) ---');

test('doubles the delay each call', () => {
});

test('caps at the maximum', () => {
});

test('full progression from MIN caps at MAX and never exceeds it', () => {
});

test('exposes sane constants', () => {
});

console.log('\n--- Wiring (source) ---');

test('reflects all three connection states', () => {
});

test('renders a tombstone overlay when paused', () => {
});

test('hardens reconnection (onerror, null socket, clears pending timer)', () => {
});

test('reloads on recovery and on reload messages', () => {
});

console.log('\n--- Reconnect state machine (mocked browser) ---');

// Drive helper.js's browser code against mocked DOM/WebSocket/timers/clock so we
// can exercise the actual reconnect/status/tombstone behaviour, not just grep it.
function makeEnv() {
    pass  # TODO: implement
  class FakeWS {
      pass  # TODO: implement
}

test('uses sessionStorage key in the WebSocket URL when present', () => {
});

test('uses cookie-only WebSocket URL when no sessionStorage key is present', () => {
});

test('on disconnect shows Reconnecting and schedules a 500ms reconnect', () => {
});

test('reconnect delay backs off 500 -> 1000 -> 2000', () => {
});

test('shows the tombstone and Disconnected after the grace period', () => {
});

test('rebootstraps with stored key when a tombstoned connection comes back', () => {
});

test('reloads to recover when tombstoned and no sessionStorage key is present', () => {
});

console.log(`\n--- Results: ${passed} passed, ${failed} failed ---`);
if (failed > 0) process.exit(1);
