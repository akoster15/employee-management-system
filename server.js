//Import modules
const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();