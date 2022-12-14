const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    //Complete with your code
    let result;
    //search in countries
    countries.find(object =>{
        //if there is equality we assign to result
        if(object.iso3 === isoCode){
            result = object;
        }
    });

    //return the object
    return result;
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    //Complete with your code
    let result;
    //search in countries
    countries.find(object =>{
        //if there is equality we assign to result an object
        if(object.iso3 === isoCode){
            result = object.translations;
        }
    });

    //search in result
    let claves = Object.keys(result); 
    for(let i=0; i< claves.length; i++){
        //if there is equality we assign to result an String
        if(claves[i] === language){result = result[claves[i]];}
    
    }
    //return the string
    return result;
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    //Complete with your code
    let result = [];
    let i = 0;
    //search in countries
    countries.find(object =>{
        //if there is equality we assign to result
        if(object.subregion === subregion){
            result[i] = object.name;
            i++;
        }
    });

    //return the array
    return result;
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();