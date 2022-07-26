function easyNumberSeparator(config) {
    // Currency Separator
    let commaCounter = 10;

    console.log(config);

    const obj = {
        selector: config.selector || ".number-separator",
        separator: config.separator || ",",
        decimalSeparator: config.decimalSeparator || ".",
        resultInput: config.resultInput || [],
        /* resultInput: [
        	{ "#number-separate-1": "#number-original-1" },
        	{ "#number-separate-2": "#number-original-2" }
        ] */
    }

    console.log(obj.separator);

    function numberSeparator(num) {
        for (let i = 0; i < commaCounter; i++) {
            num = num.replace(obj.separator, "");
        }

        x = num.split(obj.decimalSeparator);
        y = x[0];
        z = x.length > 1 ? obj.decimalSeparator + x[1] : "";
        let rgx = /(\d+)(\d{3})/;

        while (rgx.test(y)) {
            y = y.replace(rgx, "$1" + obj.separator + "$2");
        }
        commaCounter++;

        obj.resultInput.forEach(element => {
            Object.keys(element)
                .forEach(function eachKey(key) {
                    const baseInput = document.querySelector(key)
                    const resInput = document.querySelector(element[key])

                    if (resInput && baseInput) {
                        let regex = new RegExp("[" + obj.separator + "]", "gm")
                        let regex_decimal = new RegExp("[" + obj.decimalSeparator + "]", "gm")

                        resInput.value = baseInput.value.replace(regex, '').replace(regex_decimal, '.')
                    }
                });
        });

        return y + z;
    }

    document.querySelectorAll(obj.selector).forEach(function(el) {
        el.addEventListener("input", function(e) {
            const reg = new RegExp(
                `^-?\\d*[${obj.separator}${obj.decimalSeparator}]?(\\d{0,3}${obj.separator})*(\\d{3}${obj.separator})?\\d{0,3}$`
            );

            const key = e.data || this.value.substr(-1)

            if (reg.test(key)) {
                e.target.value = numberSeparator(e.target.value);
            } else {
                e.target.value = e.target.value.substring(0, e.target.value.length - 1);
                e.preventDefault();
                return false;
            }
        });
        el.value = numberSeparator(el.value);
    });
}
