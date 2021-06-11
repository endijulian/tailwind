const mix = require('laravel-mix');

mix.postCss('resources/css/min.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer'),
])
    .options({
        autoprefixer:{
            options:{
                browsers: [
                    " last 5 versions",
                ]
            }
        }
    })
   .setPublicPath('public');