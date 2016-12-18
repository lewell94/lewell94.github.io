const gulp   = require('gulp');
const babel  = require('gulp-babel');
const gutil  = require('gulp-util');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('js', () => {
	return gulp.src('./src/js/script.js')
		.pipe(babel({
			presets : ['es2015', 'react']
		}))
		.pipe(uglify().on('error', gutil.log))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
	gulp.watch('./src/js/script.js', ['js']);
});