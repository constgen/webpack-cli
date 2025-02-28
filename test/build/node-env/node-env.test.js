'use strict';

const { run } = require('../../utils/test-utils');

describe('--node-env flag', () => {
    it('should set "process.env.NODE_ENV" to "development"', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--node-env', 'development']);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain("mode: 'development'");
    });

    it('should set "process.env.NODE_ENV" to "production"', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--node-env', 'production']);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain("mode: 'production'");
    });

    it('should set "process.env.NODE_ENV" to "none"', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--node-env', 'none']);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain("mode: 'none'");
    });

    it('should set "process.env.NODE_ENV" and the "mode" option to "development"', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--node-env', 'development', '--config', './auto-mode.config.js']);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain("mode: 'development'");
    });

    it('should set "process.env.NODE_ENV" and the "mode" option to "production"', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--node-env', 'production', '--config', './auto-mode.config.js']);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain("mode: 'production'");
    });

    it('should set "process.env.NODE_ENV" and the "mode" option to "none"', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--node-env', 'none', '--config', './auto-mode.config.js']);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain("mode: 'none'");
    });
});
