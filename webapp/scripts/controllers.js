'use strict';

/* Controllers */

searchDocumentsApp.controller('MainController', function ($scope, $http, $location, ELASTICSEARCH) {
		$scope.search=function () {
			console.log("searching for documents with terms " + $scope.query_terms);
			$http({
					url : ELASTICSEARCH._url,
					method : ELASTICSEARCH._protocol,
					data: {
						  fields : ["name","title"],
						  query : {
						    query_string : {
						      query : $scope.query_terms
						    }
						  },
						  highlight : {
						    fields : {
						      file : {fragment_size : 120, number_of_fragments : 8}
						    }
						  }
						}
				}).success(function(data, status, headers, config) {
						 console.log(data);
						 $scope.es_result=data;
				}).error(function(data, status, headers, config) { 
						 console.error('ERROR - HTTP' + status + " :\n" + data)
			});
		}
    });


searchDocumentsApp.controller('LanguageController', function ($scope, $translate, LanguageService) {
        $scope.changeLanguage = function (languageKey) {
            $translate.use(languageKey);

            LanguageService.getBy(languageKey).then(function(languages) {
                $scope.languages = languages;
            });
        };

        LanguageService.getBy().then(function (languages) {
            $scope.languages = languages;
        });
    });

searchDocumentsApp.controller('MenuController', function ($scope) {
    });

