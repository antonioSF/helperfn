let mix = require('laravel-mix');

mix.sass('resources/styles/app.scss', 'public/styles/app.css');

mix.js('resources/scripts/app.js', 'public/scripts/app.js');