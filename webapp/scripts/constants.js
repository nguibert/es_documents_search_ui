'use strict';

/* Constants */
searchDocumentsApp.constant('ELASTICSEARCH', {
        '_url': 'http://localhost:9200/filesystem/docs/_search', // contient l'index, le type, et l'action (_search) 
        '_protocol' : 'POST'
    });


/*
Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
They are written in English to avoid character encoding issues (not a perfect solution)
*/
searchDocumentsApp.constant('LANGUAGES', {
        'en': 'English',
        'fr': 'French'
    });
