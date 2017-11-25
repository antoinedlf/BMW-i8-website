const gulp         = require('gulp')
const plumber      = require('gulp-plumber')
const notify       = require('gulp-notify')
const autoprefixer = require('gulp-autoprefixer')
const rename       = require('gulp-rename')
const imagemin     = require('gulp-imagemin')
const connect      = require('gulp-connect')
const open         = require('gulp-open')
const htmlmin      = require('gulp-htmlmin')
const stylus       = require('gulp-stylus')
const concat       = require('gulp-concat')
const babel        = require('gulp-babel')
const ip           = require('ip').address()


const config = {
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
        gulp.src(config.src + 'index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.dist))
        .pipe(connect.reload())
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
gulp.task('js', () =>
 gulp.src('src/js/*.js')
      .pipe(babel())
      .pipe( plumber() )
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest(config.dist + 'js'))
);

gulp.task('watch', () => {
    gulp.watch(config.src + 'img/*', ['images'])
    gulp.watch(config.src + 'fonts/*', ['fonts'])
    gulp.watch(config.src + 'stylus/**/*.styl', ['css'])
    gulp.watch(config.src + 'js/*', ['js'])
    gulp.watch(config.src + '*.html', ['html'])
})


gulp.task('connect', ['liveserver', 'uri'], () => {})

gulp.task('build', ['html', 'images', 'css', 'fonts', 'js'], () => {})

gulp.task('default', ['build', 'connect', 'watch'], () => {})
