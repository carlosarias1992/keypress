export const addClass = (element, className) => {
    const classes = element.className.split(" ");
    
    if (!classes.includes(className)) {
        classes.push(className);
    }

    element.className = classes.join(" ");
};

export const removeClass = (element, className) => {
    const classes = element.className.split(" ");

    const filteredClasses = classes.filter(klass => {
        return klass !== className;
    });

    element.className = filteredClasses.join(" ");
};

export const typewriterEffect = (element, string) => {
    const speed = 100;

    let i = 0;
    const typewriter = () => {
        if (i < string.length) {
            element.innerHTML += string.charAt(i);

            setTimeout(typewriter, speed);
            i++;
        }
    };

    typewriter();
};