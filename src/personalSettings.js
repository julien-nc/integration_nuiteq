/* jshint esversion: 6 */

/**
 * Nextcloud - Nuiteq
 *
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
 * @copyright Julien Veyssier 2022
 */

import Vue from 'vue'
import './bootstrap.js'
import PersonalSettings from './components/PersonalSettings.vue'

// eslint-disable-next-line
'use strict'

// eslint-disable-next-line
new Vue({
	el: '#nuiteq_prefs',
	render: h => h(PersonalSettings),
})
