#!/usr/bin/env bash

git pull
npm install
npm audit fix
bin/www