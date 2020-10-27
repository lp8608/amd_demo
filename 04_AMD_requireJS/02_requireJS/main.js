(function () {


    requirejs.config({
        baseUrl: 'js/',
        paths: {
            alerter: './modules/alerter',
            dataService: './modules/dataService'

        }
    });


    requirejs(['alerter'], function (alerter) {
        alerter.showMsg()
        console.log('modify by lipengak  local dev requirejs main.js')
    });
})();