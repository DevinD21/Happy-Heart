import Home from "./views/Home.js";
import Records from "./views/Records.js";
import Settings from "./views/Settings.js";
import {showResult} from "./main.js";
import {displayALL} from "./main.js";
import {deleteAll} from "./main.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/home", view: Home},
        {path: "/records", view: Records},
        {path: "/settings", view: Settings},
    ];

    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML= await view.getHtml();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

    //console.log(document.querySelector("#app").querySelector('#sysPress'));
    //console.log(document.querySelector("#app"));//console.log(document.querySelector("#app"));

   document.body.addEventListener("click", e =>  {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();

            navigateTo(e.target.href);
        }
    });
    router();

    //PUT:stores user input for systolic and diastolic blood press and displays the results
    document.querySelector("#app").addEventListener('submit', e => {
        e.preventDefault();
        $('#home').on('submit', e => {
            e.preventDefault();
            let sysPress = $('#sysPress').val();
            let diaPress = $('#diaPress').val();

            $.ajax({
                url: '/results',
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({sysPress: sysPress, diaPress: diaPress}),
                success: function (response) {
                    let results = showResult(sysPress, diaPress);
                    let ResultForm = $("#results")

                    $('#sysPress').val('');
                    $('#diaPress').val('');

                    ResultForm.html('');

                    ResultForm.html(results);

                }
            });
        });
    });

    //PUT: handler for records page
    document.querySelector("#app").addEventListener('submit', e => {
        e.preventDefault();
        $('#record_form').on('submit', e => {
            e.preventDefault();
            $.ajax({
                url: '/record',
                method: 'PUT',
                contentType: 'application/json',
                success: function(response){
                    let recordsTbody = $('#recordsTbody');

                    recordsTbody.html('');

                    for(let i = 0; i < displayALL().length; ++i)
                    {
                        recordsTbody.append(displayALL()[i]);
                    }
                }
            });
        });
    });

    //DELETE all records
    document.querySelector("#app").addEventListener('submit', e => {
        e.preventDefault();
        $('#settings_form').on('submit', e => {
            e.preventDefault();
            $.ajax({
                url: '/settings',
                method: 'DELETE',
                contentType: 'application/json',
                success: function (response) {
                    deleteAll();
                }
            });
        });
    });
});


