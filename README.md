#pd-gulp-gfx-generator

##Install

	npm install --save platdesign/pd-gulp-gfx-generator
	
##Example

	var gulp = require('gulp');
	var gfx = require('pd-gulp-gfx-generator')(gulp);

	// Register default tasks (default, watch, build, etc.)
	gfx.register({
		myLib:{
			src: './src/gfx/**/*.{jpg,jpeg,gif,svg,png}',
			dest: './dist/gfx'
		}
	});

	// Create custom gulp-task
	gulp.task('customGfx', gfx({
		custom: {
			src: './src/gfx/**/*.{jpg,jpeg,gif,svg,png}',
			dest: './dist/gfx'
		}
	}));


##Options

- `imagemin` Configuration object for [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
- `watch` True or path which will be observed

