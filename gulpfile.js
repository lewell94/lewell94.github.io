const gulp    = require('gulp');
const babel   = require('gulp-babel');
const cssnano = require('gulp-cssnano');
const gutil   = require('gulp-util');
const rename  = require('gulp-rename');
const sass    = require('gulp-sass');
const uglify  = require('gulp-uglify');

gulp.task('css', () => {
	return gulp.src('./src/css/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./'));
})

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
	gulp.watch('./src/css/style.scss', ['css']);
	gulp.watch('./src/js/script.js',   ['js']);
});