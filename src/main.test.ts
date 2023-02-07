import { describe, expect, it } from 'vitest';
import { foo } from './main';

describe('test suite', () => {
  it('works', () => {
    expect(foo()).toEqual('bar');
  });
});
