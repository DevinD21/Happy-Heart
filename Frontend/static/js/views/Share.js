import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Share");
    }

    async getHtml() {
        return `
            <h1>Share</h1>
            <p>Includes links for different ways to share</p>
        `;
    }
}