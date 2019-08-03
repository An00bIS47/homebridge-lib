#!/usr/bin/env node

// homebridge-lib/cli/json.js
//
// Library for Homebridge plugins.
// Copyright © 2018-2019 Erik Baauw. All rights reserved.
//
// JSON formatter.

'use strict'

const homebridgeLib = require('../index')

new homebridgeLib.JsonCommand().main()
