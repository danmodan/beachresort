function debug(clazz) {

    clazz.forEach(c => {

        var found = document.getElementsByTagName(c);

        for (let index = 0; index < found.length; index++) {
            const element = found[index];
            element.classList.add("outlined")
        }
    });
}

var array = [
    "*"
];

debug(array);
