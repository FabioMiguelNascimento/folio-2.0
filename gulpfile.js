import gulp from "gulp";
import svgstore from "gulp-svgstore";
import cheerio from "gulp-cheerio";
import rename from "gulp-rename";

gulp.task("svgstore", function () {
return gulp
    .src("src/assets/icon/*.svg")
    .pipe(
        cheerio({
            run: function ($) {
                $("[fill]").removeAttr("fill");
                $("[stroke]").removeAttr("stroke");
            },
            parserOptions: { xmlMode: true },
        })
    )
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("./"));
});

gulp.task("watch", function () {
  gulp.watch("src/assets/icon/*.svg", gulp.series("svgstore"));
});