module.exports = function () {


	$.gulp.task('scripts', function () {
		// return $.gulp.src('sourse/js/custom.js')

		return $.gulp.src($.sourse + '/js/libs.js')
			// .pipe($.babel())
			.pipe($.webpack({
				mode: 'production',
				module: {
					rules: [
						{
							test: /\.(js)$/,
							exclude: /(node_modules)/,
							loader: 'babel-loader',
						}
					]
				}
			})).on('error', function handleError() {
				this.emit('end')
			})
			// 
			// .pipe($.tabify(2, true))
			.pipe($.rename('libs.js'))
			.pipe($.gulp.dest($.public + '/js'))
			.pipe($.browserSync.stream());
	});

	$.gulp.task('scripts:common', function () {
		// return $.gulp.src('sourse/js/custom.js')

		return $.gulp.src(
			[
				$.sourse + '/js/custom.js',
				// $.sourse + '/pug/**/*.js',
			])


			.pipe($.babel())
			.pipe($.tabify(2, true))
			.pipe($.gulp.dest($.public + '/js'))
			.pipe($.browserSync.stream());
	}
	);

}