import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Records");
    }

    async getHtml() {
        return `
           <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Records</title>
                <link rel="stylesheet" href="/static/css/index.css">
                <script src="jquery.js"></script>
                <script type="module" src="Frontend/static/js/views/home.js"></script>
            </head>
            <body>
                <h1>Records</h1>
                <div class="record_cont">
                    <form class="record_form">
                    <button class="share_button">Share</button>
                        <table id="Records_Table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Systolic pressure</th>
                                    <th>Diastolic pressure</th>
                                </tr>    
                            </thead>
                            <tbody id="recordsTable"></tbody>
                        </table>
                    </form>
                </div>
            </body>
            </html>
        `;
    }
}