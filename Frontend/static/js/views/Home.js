import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Happy Heart ♥️</h1>
            <input id="sys-press" type="text" placeholder="Enter Systolic pressure"> 
            <button id="sys-button">Enter</button>
            <br>
            <input id="dia-press" type="text" placeholder="Enter Diastolic pressure">
            <button id="dia-button">Enter</button>
            <br>
            <p>
               Results will be Displayed here
            </p>
        `;
    }
}