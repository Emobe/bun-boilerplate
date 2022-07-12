import { describe, expect } from "bun:test";
import program from '../src/main';

describe('Returns the value passed', () => {
    const value = 3;
    expect(program(value)).toBe(3);
});