let headerContent = `
    <header>
        <h1 class="logo">
            Logo
        </h1>

        <button class="cta">
            Click Me!
        </button>
    </header>
`;

class Header {
    static render() {
        document.body.innerHTML = headerContent;
    }
}

export default Header.render();