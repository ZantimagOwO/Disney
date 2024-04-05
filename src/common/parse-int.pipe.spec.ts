import { BadRequestException } from '@nestjs/common';
import { ParseIntPipe } from './parse-int.pipe';

describe('ParseIntPipe', () => {
  let parseIntPipe: ParseIntPipe;

  beforeEach(() => {
    parseIntPipe = new ParseIntPipe();
  });

  it('should transform a valid number string to an integer', () => {
    const result = parseIntPipe.transform('42', null);
    expect(result).toEqual(42);
  });

  it('should throw BadRequestException when the input value is not a number', () => {
    try {
      parseIntPipe.transform('abc', null);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toEqual('abc is not an number');
    }
  });
});
