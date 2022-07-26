# Easy Multiple Number Separator

Easy Number Separator is a useful pure JavaScript plugin for currency format and separate numbers on input.<br>
Easy Multiple Number Separator adds the ability to create more than one `resultInput`

### <a href="https://amiryxe.github.io/easy-number-separator/" target="_blank">View Demo</a>

### Features

- Separate numbers by your custom character separators like comma character (`,`) or any other characters.
- Does not accept non-numeric characters.
- Can work on any text inputs by your selector.

### How to Use

1. Add **Easy Number Separator** plugin to your project:

```html
<script src="js/easy-number-separator.js"></script>
```

3. Make your input text field like this:    
```html
<input type="text" class="number-separator" />
```

3. Select your input element:
```javascript
easyNumberSeparator({
    selector: '.number-separator',
    separator: ','
})
```

### Options
|Title|Default|Description|
|-----|-------|-----------|
|selector|`.number-separator`|Selects the input element|
|separator|`,`|The character of number separator|
|decimalSeparator|`.`|The character of decimal separator|
|resultInput|-|Raw number generated for purposes such as server submission and calculations| 

### Send data to server
If you want to send data to the server, you can set a result input by `resultInput` property and hold the original value.

#### Example:

##### HTML:
```html
<input type="text" class="number-separator" id="min_price_separator">
<input type="hidden" id="min_price" name="min_price">

<input type="text" class="number-separator" id="max_price_separator">
<input type="hidden" id="max_price" name="max_price">
```
##### JavaScript:
```javascript
easyNumberSeparator({
    selector: '.number-separator',
    separator: ',',
    resultInput: [
        {'#min_price_separator': '#min_price'},
        {'#max_price_separator': '#max_price'}
    ],
})
```


### CDN
```html
<script src="https://raw.githubusercontent.com/applethecandy/easy-multiple-number-separator/master/easy-number-separator.js"></script>
```

Enjoy :)
