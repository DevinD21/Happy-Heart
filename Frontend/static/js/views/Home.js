import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1 class="home_title">Happy Heart ♥️</h1>
            <div class="home_cont">
                <form class="home_form">
                    <div class="home_message">
                        <p>Please enter your current Systolic and Diastolic pressure.</p>
                    </div>
                    <div class="home_input-group">
                        <input class="home_input" type="text" placeholder="Systolic pressure"> 
                    </div>
                    <div class="home_input-group">
                        <input class="home_input" type="text" placeholder="Diastolic pressure">
                    </div>
                    <button class="home_button">Enter</button>
                    <br>
                </form>
            </div>
            <div class="home_results">
                <form class="result_form form_hidden">
                    <p>Results will be displayed here</p>
                </form>
            </div>
        `;
    }
}