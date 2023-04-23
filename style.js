const log = console.log;

class AppStyles {
    static importStyles () {
        // GET HEAD ELEMENT
        const head = document.getElementsByTagName('head')[0];
        // CREAT NEW LINK ELEMENT
        let link = document.createElement('link');
        // SET ATTRIBUTES FOR LINK ELEMENT
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style.css';

        // APPEND LINK TO HEAD TAG
        head.appendChild(link);

        // CREATE NEW LINK ELEMENT
        let icons = document.createElement('link');

        // SET ATTRIBUTES
        icons.rel = 'stylesheet';
        icons.type = 'text/css';
        icons.href = './assets/fontawesome/css/all.css';

        // APPEND LINK TO HEAD TAG
        head.appendChild(icons);


        // LOG TO CONSOLE ON SUCCESS | ERROR
        setTimeout(() => {
            if (true) {
                log('Styles imported....');
            } else {
                log('Styles failed to load properly...');
            }
        }, 2000);
    }
}

export default AppStyles.importStyles();