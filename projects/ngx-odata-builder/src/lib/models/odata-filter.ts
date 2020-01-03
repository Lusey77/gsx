export type ODataLogicalOperator = 'eq' | 'ne' | 'gt' | 'ge' | 'lt' | 'le' | 'and' | 'or' | 'not';

export type ODataArithmeticOperator = 'add' | 'sub' | 'mul' | 'div' | 'mod';

export type ODataGroupingOperator = 'group';

export type ODataStringFunction = 'substringof' | 'endswith' | 'startswith' | 'length' | 'indexof' | 'replace' | 'substring' | 'substring' | 'tolower' | 'toupper' | 'trim' | 'concat';

export type ODataDateFunction = 'day' | 'hour' | 'minute' | 'month ' | 'second' | 'year';

export type ODataMathFunction = 'round' | 'floor' | 'ceiling';

export type ODataTypeFunction = 'isOf';

export interface ODataLogicalOperatorFunction { }

export type FilterExpression = string;

export type StringFilterExpression =

export function substringof(property: string | FilterExpression, value: string): FilterExpression {
  return `substringof('${value}', ${property})`;
}

export function endswith(property: string | FilterExpression, value: string): FilterExpression {
  return `endswith('${property}', ${value})`;
}

export function startswith(property: string | FilterExpression, value: string): FilterExpression {
  return `startswith('${property}', ${value})`;
}

export function length(property: string | FilterExpression): FilterExpression {
  return `length(${property})`;
}

export function indexof(property: string | FilterExpression, value: string): FilterExpression {
  return `indexof('${property}', ${value})`;
}

export function replace(property: string | FilterExpression, find: string, replace: string): FilterExpression {
  return `replace('${property}', ${find}, ${replace})`;
}

export function substring(property: string | FilterExpression, position: number, length?: number): FilterExpression {

}

export function toupper(property: string | FilterExpression): FilterExpression {
  return `toupper(${property})`;
}

export function tolower(property: string | FilterExpression): FilterExpression {
  return `tolower(${property})`;
}

export function trim(property: string | FilterExpression): FilterExpression {
  return `trim(${property})`;
}

export function concat()
