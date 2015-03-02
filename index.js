'use strict';

var createGenerator	= require('pd-gulp-task-generator-generator');
var extend 		= require('extend');
var imagemin 	= require('gulp-imagemin');
var pngquant	= require('imagemin-pngquant');


module.exports = createGenerator('Gfx', function() {


	this.compile(function(job, cb) {

		return this.gulp.src(job.config.src)
			.pipe(imagemin(
				extend(true, {
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					use: [pngquant()]
				}, job.config.imagemin)
			))
			.on('error', cb)
			.pipe( this.gulp.dest( job.config.dest ) )
			.on('error', cb)
			.on('end', cb);

	});

	this.appendTask('default', {

	});

	this.appendTask('build', {

	});

	this.appendTask('watch', {
		watch:true,
	});

});








