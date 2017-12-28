const gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

    const PORT = process.env.PORT || 9009;

gulp.task('default', function(){
    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            PORT: PORT
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting');
    })
});
