#!/usr/bin/env bash

#
# For a production build we want to move the compiled assets to the Laravel framework.
# This script will move the necessary files to the right places.
#

# Run the production build.
npx vue-cli-service build

rm ../resources/views/vue-application.blade.php
mv ./dist/index.html ../resources/views/vue-application.blade.php

rm -rf ../public/css
rm -rf ../public/js
rm -rf ../public/img
mv ./dist/* ../public

# Remove the build folder.
rm -rf ./dist
