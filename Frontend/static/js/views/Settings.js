import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Settings</h1>
            <form class="settings_form" id="settings_form">
                <button class="settings_button" id="settings_button" type="submit"">Delete Records</button>
                <p></p>
            </form>
        `;
    }
}