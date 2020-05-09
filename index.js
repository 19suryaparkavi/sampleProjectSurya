'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json()); // creates http server
const token = 'VERIFICATION_TOKEN'; // type here your verification token

app.listen(2590, () => console.log('[ChatBot] Webhook is listening'));
