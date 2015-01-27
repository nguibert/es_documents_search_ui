'use strict';

/* App Module */
// loads Angular modules
var searchDocumentsApp = angular.module('searchDocumentsApp', ['http-auth-interceptor', 'tmh.dynamicLocale',
    'ngResource', 'ngRoute', 'ngCookies', 'searchDocumentsAppUtils', 'pascalprecht.translate', 'truncate', 'ngCacheBuster', 'ngSanitize', 'ui.unique']);

searchDocumentsApp.config(function ($routeProvider, $translateProvider, tmhDynamicLocaleProvider) {
            // controller
            $routeProvider
                .otherwise({
                    templateUrl: 'views/search_results.html',
                    controller: 'MainController'
                });

            // Initialize angular-translate
            $translateProvider.useStaticFilesLoader({
                prefix: 'i18n/',
                suffix: '.json'
            });

            $translateProvider.preferredLanguage('en');

            $translateProvider.useCookieStorage();

            tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js')
            tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');
        });
