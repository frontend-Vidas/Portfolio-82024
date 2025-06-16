/**
 * @jest-environment jsdom
 */

import { services } from "./services.js";

describe('Wrong params', () => {
    test('No params', () => {
        expect(services()).toBe(false);
    })
    test('Selector as number', () => {
        expect(services(5)).toBe(false);
    })
    test('Data as function', () => {
        expect(services('a', '')).toBe(false);
    })
})

describe('Partialy invalid params: selector', () => {
    test('No element with id: "a"', () => {
        const data = [{
            icon: 'desktop',
            title: 'Search optimization',
            desc:'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading',
        }];
        document.body.innerHTML = '<div id="a"></div>';
        expect(services('a', data)).toBe(true);
    })
})

describe('Partialy invalid params: data', () => {
    test('All data elements are incorrect type (not true object)', () => {
        const data = [5, 'asd', true, [], services, null, undefined];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    })
    test('Empty object', () => {
        const data = [{}];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    })
    test('Incorrect object: not enough keys (1)', () => {
        const data = [{
            icon: 'desktop',
        }];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    })
    test('Incorrect object: not enough keys (2)', () => {
        const data = [{
            icon: 'desktop',
            title: 'My service',
        }];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    })
    test('Incorrect object: too many keys (4)', () => {
        const data = [{
            icon: 'desktop',
            title: 'My service',
            desc: 'My service',
            extra: 'extra',
        }];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    })
    test('Incorrect object: key names ()', () => {
        const data = [{
            a: 'desktop',
            b: 'My service',
            c: 'My service',
        }];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    })
})

describe('Valid params', () => {
    test('No element with id: "a"', () => {
        const data = [{
            icon: 'desktop',
            title: 'Search optimization',
            desc:'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading',
        }];
        document.body.innerHTML = '<div id="a"></div>';
        expect(services('a', data)).toBe(true);
    })
})
