#pd-gulp-gfx

[pd-gulp](https://github.com/platdesign/pd-gulp) task generator for gfx tasks.

##Install

	npm install --save pd-gulp-gfx
	
##Example

```javascript
var gulp = require('gulp');
var gfx = require('pd-gulp-gfx')(gulp);

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
```

##Options

- `imagemin` Configuration object for [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
- `watch` True or path which will be observed

