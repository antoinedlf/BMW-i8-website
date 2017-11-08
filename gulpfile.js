var gulp         = require('gulp')

var  plumber       = require('gulp-plumber')
     notify       = require('gulp-notify')
     sourcemaps   = require('gulp-sourcemaps')
     autoprefixer = require('gulp-autoprefixer')
     rename       = require('gulp-rename')
     imagemin     = require('gulp-imagemin')
     connect      = require('gulp-connect')
     open         = require('gulp-open')
     stylus       = require('gulp-stylus')
     concat       = require('gulp-concat')
     uglify       = require('gulp-uglify')
     ip           = require('ip').address()


let config = {
    'src' : 'src/',
    'dist': 'dist/',
    'ip': ip,
    'port': 8080
}


gulp.task('liveserver', () => {
    connect.server({
        root: 'dist',
        livereload: true,
        host: config.ip,
        port: config.port
    })
})

gulp.task('uri', () => {
    return gulp.src(__filename)
        .pipe(open({
            uri: `http://${config.ip}:${config.port}`
        }))
})

gulp.task('html', () =>
    gulp.src(config.src + '*.html')
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.stream())
        .pipe(notify('HTML updated: <%= file.relative %>'))
);

gulp.task('images', () => {
    return gulp.src(config.src + 'img/*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.dist + 'img'))
        .pipe(connect.reload())
        .pipe(notify('Image minified: <%= file.relative %>'))
})

gulp.task('fonts', () => {
    return gulp.src(config.src + 'fonts/**/*')
        .pipe(gulp.dest(config.dist + 'fonts'))
        .pipe(connect.reload())
})

gulp.task( 'css', function()
{
    gulp.src( './src/stylus/app.styl' )   // main.styl as input
        .pipe( plumber() )            // Gère les erreurs
        .pipe( stylus( { compress: true } ) ) // Convert to CSS
        .pipe( gulp.dest(config.dist + 'css'));         // Put it in CSS folder
} );

// JS task
gulp.task( 'js', function()
{
    return gulp.src( [                          // Get JS files (in order)
            './src/js/*.js'
        ] )
        .pipe( concat( 'main.min.js' ) ) // Concat in one file
        .pipe( uglify() )                  // Minify them
        .pipe( gulp.dest(config.dist + 'js') );      // Put it in folder
} );


gulp.task('watch', () => {
    gulp.watch(config.src + 'img/*', ['images'])
    gulp.watch(config.src + 'fonts/*', ['fonts'])
    gulp.watch(config.src + 'stylus/*', ['css'])
    gulp.watch(config.src + 'js/*', ['js'])
})


gulp.task('connect', ['liveserver', 'uri'], () => {})

gulp.task('build', ['css', 'fonts', 'js'], () => {})

gulp.task('default', ['build', 'connect', 'watch'], () => {})
