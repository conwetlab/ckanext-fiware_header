/*
 * (C) Copyright 2014 CoNWeT Lab., Universidad Politécnica de Madrid
 *
 * This file is part of CKAN FIWARE Header Extension.
 *
 * CKAN FIWARE Header Extension is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * CKAN FIWARE Header Extension is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with CKAN FIWARE Header Extension. If not, see
 * <http://www.gnu.org/licenses/>.
 *
 */

(function() {
    
    url = 'https://account.lab.fiware.org/assets/signOut.js'

    // Adding the script tag to the body
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Fire the loading
    body.appendChild(script);

})();