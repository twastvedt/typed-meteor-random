// Type definitions for meteor-random

declare namespace Random {

  /**
   * Returns a unique identifier, such as "Jjwjg6gouWLXhMGKW", that is likely to be unique in the whole world. 
   * @param {number} n - Specifies the length of the identifier in characters and defaults to 17.
   */
  export function id(n?: number): string;

  /**
   * Returns a random string of printable characters with 6 bits of entropy per character. Use Random.secret for security-critical secrets that are intended for machine, rather than human, consumption.
   * @param {number} n - Specifies the length of the secret string and defaults to 43 characters, or 256 bits of entropy. 
   */
  export function secret(n?: number): string;

  /**
   * Returns a number between 0 and 1, like Math.random.
   */
  export function fraction(): number;

  /**
   * Returns a random element of the given array or string.
   */
  export function choice<U>(array: U[]): U;
  export function choice(array: string): string;

  /**
   * Returns a random string of n hexadecimal digits.
   * @param {number} n - Number of digits.
   */
  export function hexString(n: number): number;
}

export = Random;
