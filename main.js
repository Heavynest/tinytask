// file my_extension/main.js

define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {

        var handler = function () {
            fetch("http://localhost:8000/api/", { mode:'cors',method:'POST', headers: {
            "Access-Control-Allow-Credentials" : "true",
            "Access-Control-Allow-Origin" : "http://localhost:8000/api/",
            "Content-Type" : "application/json"
        }})
              .then((response)=>{
                console.log(response);
                return response.json();
              })
              .then((data)=>{
                alert(data.value);
              })
              .catch(error=> console.log(error));
            //alert("this is something")
        };

        var action = {
            title: 'hello sir',
            icon: 'fa-hdd-o', // a font-awesome class used on buttons, etc
            help    : 'api retrieve',
            help_index : 'zz',
            handler : handler
        };
        var prefix = 'my_extension';
        var action_name = 'show-alert';

        var full_action_name = Jupyter.actions.register(action, action_name, prefix); // returns 'my_extension:show-alert'
        Jupyter.toolbar.add_buttons_group([{'label':'Hello World!','action':'my_extension:show-alert'}]);
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});