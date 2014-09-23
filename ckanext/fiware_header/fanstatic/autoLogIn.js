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

    var IDM_HOST = 'https://account.lab.fi-ware.org'

    // Avoid loops when the IDM Authentication fails...
    if (document.referrer.indexOf(IDM_HOST + '/authorize') < 0) {

        var initialLogInText = $('#log_in').text();
        $('#log_in').text('Verifying credentials...');

        var restoreLogInText = function() {
            $('#log_in').text(initialLogInText);
        }

        var req = new XMLHttpRequest();
        req.open('GET', IDM_HOST + '/user', true);
        req.withCredentials = true;
        req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        req.onload = function() {
            if (this.status == 200) {
                $('#log_in').text('Signing in...');
                $('#log_in').click();
            } else {
                restoreLogInText();
            }
        }
        req.onerror = restoreLogInText;
        req.ontimeout = restoreLogInText;
        req.onabort = restoreLogInText;
        req.send();
    }

})()