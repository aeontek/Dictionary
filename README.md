<a name="Dictionary"></a>

## Dictionary
Class for handling string-indexed objects. Similar to Dictionaries or Advanced Lists in other languages

**Kind**: global class  

* [Dictionary](#Dictionary)
    * _instance_
        * [.getById(id)](#Dictionary+getById) ⇒ <code>any</code>
        * [.add(id)](#Dictionary+add)
        * [.remove(id)](#Dictionary+remove) ⇒ <code>any</code>
        * [.forEach(callback)](#Dictionary+forEach)
        * [.map(callback)](#Dictionary+map) ⇒ <code>Array</code>
        * [.getKeys()](#Dictionary+getKeys)
    * _static_
        * [.fromObject(obj)](#Dictionary.fromObject) ⇒ <code>Dictionary.&lt;T&gt;</code>

<a name="Dictionary+getById"></a>

### dictionary.getById(id) ⇒ <code>any</code>
Gets the object listed under the specific ID. If no such item exists, returns null

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: <code>any</code> - The object identified by the unique identifier  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier for the specified object |

<a name="Dictionary+add"></a>

### dictionary.add(id)
Adds an object with a unique ID. If the ID is already taken, throws an error.

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Throws**:

- Invalid Identifier


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier for the specified object |

<a name="Dictionary+remove"></a>

### dictionary.remove(id) ⇒ <code>any</code>
Removes the object listed under the specific ID and returns the deleted object. If no such item exists, returns null

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: <code>any</code> - The deleted object identified by the unique identifier  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier for the specified object |

<a name="Dictionary+forEach"></a>

### dictionary.forEach(callback)
Iterates through the Ditcionary and performs an action on each item

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The Action to be performed on each iteration |

<a name="Dictionary+map"></a>

### dictionary.map(callback) ⇒ <code>Array</code>
Iterates through the Ditcionary and performs an action on each item, returning an array of the iterated results.

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: <code>Array</code> - An array of the iterated results.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The Action to be performed on each iteration |

<a name="Dictionary+getKeys"></a>

### dictionary.getKeys()
Lists all the keys used in the Dictionary

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
<a name="Dictionary.fromObject"></a>

### Dictionary.fromObject(obj) ⇒ <code>Dictionary.&lt;T&gt;</code>
Created a Dictionary<T> from a JavaScript object

**Kind**: static method of [<code>Dictionary</code>](#Dictionary)  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

