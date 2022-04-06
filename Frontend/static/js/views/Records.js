import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Records");
    }

    async getHtml() {
        return `
            <h1>Records</h1>
            <p>Will be filled with past blood pressure information</p>
        `;
    }
}