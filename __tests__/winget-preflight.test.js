import { describe, test, expect } from '@jest/globals';
import { WINGET_PREFLIGHT_BAT } from '../src/generators/winget-preflight.js';

describe('winget preflight snippet', () => {
  test('checks winget exists and refreshes the source', () => {
    expect(WINGET_PREFLIGHT_BAT).toContain('where winget');
    expect(WINGET_PREFLIGHT_BAT).toContain('winget source update');
  });

  test('warns about the certificate error and the App Installer fix', () => {
    expect(WINGET_PREFLIGHT_BAT).toContain('The server certificate did not match any of the expected values');
    expect(WINGET_PREFLIGHT_BAT).toContain('App Installer');
  });

  test('echo lines inside if blocks contain no parentheses', () => {
    const echoLines = WINGET_PREFLIGHT_BAT.split('\n').filter((l) => l.trim().startsWith('echo '));
    echoLines.forEach((line) => expect(line).not.toMatch(/[()]/));
  });

  test('does not stop the script when winget fails', () => {
    expect(WINGET_PREFLIGHT_BAT).not.toContain('exit');
  });
});
