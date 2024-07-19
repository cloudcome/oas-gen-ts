import { fixVarName, formatTsCode, nextUniqueName, refToType } from '../../src/utils/string';

test('fixVarName', () => {
    expect(fixVarName('!')).toEqual('var');
    expect(fixVarName('??')).toEqual('var');
    expect(fixVarName('hello-world')).toEqual('helloWorld');
    expect(fixVarName('hello-world123')).toEqual('helloWorld123');
    expect(fixVarName('123hello-world123')).toEqual('helloWorld123');
    expect(fixVarName('123hello-world123')).toEqual('helloWorld123');
    expect(fixVarName('[[[123hello-world123]]]')).toEqual('helloWorld123');
    expect(fixVarName('[[[123hello-world123]]]', true)).toEqual('HelloWorld123');
});

test('refToType', () => {
    expect(refToType('#/components/schemas/T')).toEqual('T');
    expect(refToType('#/components/schemas/T/oo')).toEqual('T["oo"]');
    expect(refToType('#/components/schemas/T/oo/pp/qq')).toEqual('T["oo"]["pp"]["qq"]');
});

test('nextUniqueName', () => {
    const map = new Map<string, number>();
    expect(nextUniqueName('abc', map)).toBe('abc');
    expect(nextUniqueName('abc', map)).toBe('abc_2');
    expect(nextUniqueName('abc', map)).toBe('abc_3');
    expect(nextUniqueName('abc2', map)).toBe('abc2');
});

test('formatTsCode', async () => {
    expect(await formatTsCode('function show() {const a:number=   1;const o={\na:1}\n}')).toMatchInlineSnapshot(`
      "function show() {
          const a: number = 1;
          const o = {
              a: 1,
          };
      }
      "
    `);
});
