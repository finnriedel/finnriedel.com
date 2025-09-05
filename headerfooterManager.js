class IncludeHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
	<nav class="navi">
		<div id="nav-element-logo" class="nav-element"> <p>finn<span style="color: dodgerblue">.riedel</span> </p>
			<p id="nav-element-logo-sub"> *website playground</p>
		</div>

		<div id="nav-element-navigation" class="nav-element">
			<a href="https://www.finn-riedel.de">Photography</a>
			<span style="position: relative; top: 15px;"><a href="https://www.finn-riedel.de/blog">Blog</a></span>
			<a href="https://www.finn-riedel.de">Projects</a>
			<span style="position: relative; top: 15px;"><a href="https://www.finn-riedel.de/blog">Playground</a></span>
			<a href="https://www.finn-riedel.de/contact">Contact</a>
		</div>
	</nav>
    `
    
    }
}

customElements.define('include-header', IncludeHeader)
