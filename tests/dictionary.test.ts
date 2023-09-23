import assert from "assert";
import Dictionary from "../src/Dictionary";

test("Can create a Dictionary", () => {
    assert.doesNotThrow(() => new Dictionary<string>());
});

test("Can add and retrieve items in Dictionary", () => {
    let dic = new Dictionary<string>();
    dic.add("test", "test");
    assert.deepEqual(dic.getById("test"), "test");
});

test("Can remove items from dictionary", () => {
    let dic = new Dictionary<string>();
    dic.add("test", "test");
    assert.deepEqual(dic.getById("test"), "test");
    dic.remove("test");
    assert.equal(dic.getById("test"), undefined);
});

test("Can get list of keys", () => {
    let arr = ["test1", "test2", "test3"];
    let dic = new Dictionary<string>();
    arr.forEach((x) => dic.add(x, ""));
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
    dic.add("a", "a");
    assert.throws(() => {
        dic.add("a", "b");
    });
});

test("If attempt is made to remove nonexitent item, returns null", () => {
    let dic = new Dictionary<string>();
    dic.add("a", "a");
    assert.deepEqual(dic.remove("b"), undefined);
});

test("When item is removed, returns item", () => {
    let dic = new Dictionary<string>();
    dic.add("a", "a");
    assert.deepEqual(dic.remove("a"), "a");
});
