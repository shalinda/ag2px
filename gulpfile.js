'use strict';
        const del = require("del");
        const path = require('path');
        const gulp = require('gulp');
        const pkg = require('./package.json');
        const $ = require('gulp-load-plugins')();
        const gulpSequence = require('gulp-sequence');
        const importOnce = require('node-sass-import-once');
        const stylemod = require('gulp-style-modules');
        const browserSync = require('browser-sync').create();
        const gulpif = require('gulp-if');
        const combiner = require('stream-combiner2');
        const bump = require('gulp-bump');
        const sassdoc = require('sassdoc');
        const fs = require('fs');
        const argv = require('yargs').argv;
        const sassOptions = {
        importer: importOnce,
                importOnce: {
                index: true,
                        bower: true
                }
        };
        function handleError(err){
        console.log(err.toString());
                this.emit('end');
        }
function cleanOldCSS(){
del(['.tmp', 'src/css', '*.css']);
        console.log(' >> cleaned old css dirctory.. ');
        }
function cleanTempCSS(){
del([ '*.css']);
        console.log(' >> cleaned temp css dirctory.. ');
        }

function buildCSS(){
return combiner.obj([
        $.sass(sassOptions),
        $.autoprefixer({
        browsers: ['last 2 versions', 'Safari 8.0'],
                cascade: false
        }),
        gulpif(!argv.debug, $.cssmin())
]).on('error', handleError);
        }


gulp.task('demosass', function() {
cleanOldCSS();
        return gulp.src(['./src/sass/*.scss'])
        .pipe(buildCSS())
        .pipe(gulp.dest('src/css'))

        .pipe(browserSync.stream({match: '**/*.css'}));
        });
        gulp.task('watch', function() {
        gulp.watch('src/sass/*.scss', ['demosass' ]);
        });
        gulp.task('watch2', function() {
        gulp.watch('src/**/*.css', [  'test']);
        });
        gulp.task('test', function() { console.log(' >> >>>> ');
        });