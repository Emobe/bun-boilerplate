import { describe, expect, it } from "bun:test";
import program from '../src/main';

describe('Main program', () => {
    it('should return 3', () => {
        const value = 3;
        expect(program(value)).toBe(value);
    })
});