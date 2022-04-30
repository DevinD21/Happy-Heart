import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Records");
    }

    async getHtml() {
        return `
                <h1>Records</h1>
                <div class="record_cont">
                    <form class="record_form" id="record_form">
                    <button class="records_button" id="records_button">Records</button>
                        <table id="records_table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Systolic pressure</th>
                                    <th>Diastolic pressure</th>
                                    <th> Results</th>
                                </tr>    
                            </thead>
                            <tbody id="recordsTbody"></tbody>
                        </table>
                    </form>
                </div>
            <div class="share_links">   
                <a href = "https://www.facebook.com/">
			        <button id = "facebook_icon" onclick="fileShare()"></button>
			    </a>
			    <p>Share data with Facebook</p>
			    <br>
			    <a href = "https://www.gmail.com">
			        <button id = "gmail_icon" ></button>
			    </a>
			    <p>Share data with Gmail</p>
			    <br>
			    <a href = "https://login.microsoftonline.com">
			        <button id = "office365_icon"></button>
			    </a>
			    <p>Share data with Office365</p>
			</div> 
        `;
    }
}