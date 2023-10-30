/**
 * Class for handling string-indexed objects. Similar to Dictionaries or Advanced Lists in other languages
 */
export default class Dictionary<T> {
    [Key: string]: T | Function;

    /**
     * Gets the object listed under the specific ID. If no such item exists, returns null
     * @param {string} id The unique identifier for the specified object
     * @returns {any} The object identified by the unique identifier
     */
    getById = (id: string): T | null => {
        return this[id] === undefined ? null : (this[id] as T);
    };

    /**
     * Adds an object with a unique ID. If the ID is already taken, throws an error.
     * @param {string} id The unique identifier for the specified object
     * @throws Invalid Identifier
     */
    add = (id: string, value: T) => {
        if (this[id]) {
            throw "Invalid Identiifer";
        } else {
            this[id] = value;
        }
    };

    /**
     * Removes the object listed under the specific ID and returns the deleted object. If no such item exists, returns null
     * @param {string} id The unique identifier for the specified object
     * @returns {any} The deleted object identified by the unique identifier
     */
    remove = (id: string): T | null => {
        if (this[id] && typeof this[id] !== "function") {
            let ret = this[id] as T;
            delete this[id];
            return ret;
        } else return null;
    };

    /**
     * Iterates through the Ditcionary and performs an action on each item
     * @param {Function} callback The Action to be performed on each iteration
     */
    forEach = (callback: (item: T, index: string) => any) => {
        Object.getOwnPropertyNames(this).map((id) => {
            let item = this.getById(id);
            if (typeof item !== "function") {
                callback(item, id);
            }
        });
    };

    /**
     * Iterates through the Ditcionary and performs an action on each item, returning an array of the iterated results.
     * @param {Function} callback The Action to be performed on each iteration
     * @returns {Array} An array of the iterated results.
     */
    map = (callback: (item: T, index: string) => any): any[] => {
        let ret = [];
        this.forEach((item, id) => {
            let ret2 = callback(item, id);
            ret.push(ret2);
        });
        return ret;
    };

    /**
     * Lists all the keys used in the Dictionary
     */
    getKeys = (): string[] => {
        return this.map((item: T, id: string) => id);
    };

    /**
     * Created a Dictionary<T> from a JavaScript object
     * @param {Object} obj
     * @returns {Dictionary<T>}
     */
    static fromObject = <T>(obj: any) => {
        let dictionary = new Dictionary<T>();
        Object.getOwnPropertyNames(obj).map((name) => {
            dictionary.add(name, obj[name]);
        });
        return dictionary;
    };
}
