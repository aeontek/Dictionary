import assert from "assert";
import Dictionary from "../src/Dictionary";
import { faker } from "@faker-js/faker";

test("Can create a Dictionary", () => {
    assert.doesNotThrow(() => new Dictionary<string>());
});

test("Can add and retrieve items in Dictionary", () => {
    let dic = new Dictionary<string>();
    let key = faker.lorem.word();
    let val = faker.lorem.sentence();
    dic.add(key, val);
    assert.deepEqual(dic.getById(key), val);
});

//former bug
test("Can save and retrieve false values", () => {
    let dic = new Dictionary<boolean>();
    let key = faker.lorem.word();
    let val = false;
    dic.add(key, val);
    assert.deepEqual(dic.getById(dic.getKeys()[0]), val);
});

test("Can remove items from dictionary", () => {
    let dic = new Dictionary<string>();
    let key = faker.lorem.word();
    let val = faker.lorem.sentence();
    dic.add(key, val);
    assert.deepEqual(dic.getById(key), val);
    dic.remove(key);
    assert.equal(dic.getById(key), undefined);
});

test("Can get list of keys", () => {
    let arr = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];
    let dic = new Dictionary<string>();
    arr.forEach((x) => dic.add(x, faker.lorem.sentence()));
    assert.deepEqual(dic.getKeys(), arr);
});

test("Can create Dictionary from Object", () => {
    let obj = {
        a: { a: 1, b: 2, c: 3 },
        b: { a: 1, b: 2, c: 3 },
        c: { a: 1, b: 2, c: 3 },
        d: { a: 1, b: 2, c: 3 },
    };
    let dic = Dictionary.fromObject(obj);
    assert.deepEqual(obj.c, dic.getById("c"));
});

test("Can iterate through items with callback", () => {
    let obj = {
        a: { a: 1, b: 2, c: 3 },
        b: { a: 1, b: 2, c: 3 },
        c: { a: 1, b: 2, c: 3 },
        d: { a: 1, b: 2, c: 3 },
    };
    let dic = Dictionary.fromObject(obj);
    let i = 0;
    dic.forEach((item, id) => {
        assert.deepEqual(dic.getById(id), item);
        i++;
    });
    assert.deepEqual(i, 4);
});

test("Throws error when add uses duplicate id", () => {
    let dic = new Dictionary<string>();
    let key = faker.lorem.word();
    let val = faker.lorem.sentence();
    dic.add(key, val);
    assert.throws(() => {
        dic.add(key, faker.lorem.sentence());
    });
});

test("If attempt is made to remove nonexitent item, returns null", () => {
    let dic = new Dictionary<string>();
    let key = faker.lorem.word();
    let key2 = faker.lorem.word();
    let val = faker.lorem.sentence();
    dic.add(key, val);
    assert.deepEqual(dic.remove(key2), undefined);
});

test("When item is removed, returns item", () => {
    let dic = new Dictionary<string>();
    let key = faker.lorem.word();
    let val = faker.lorem.sentence();
    dic.add(key, val);
    assert.deepEqual(dic.remove(key), val);
});
