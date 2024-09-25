/* 
This function checks if an object has any keys.
It returns "false" if there are no keys, and "true" if there is at least one key.
 */

type Obj = {
  [key: string]: unknown;
};

export function objectIsEmpty(object: Obj) {
  return Object.keys(object).length === 0;
}
