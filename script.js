$(function() {
    // github pull request main page
    if (document.URL.match(/https:\/\/github.com\/.*\/.*\/pull\/[0-9]+/)) {
        console.log('This is github pull request page');

        var commit_hash_hrefs = $('div.js-commit-group-commits .js-commit .text-right.ml-1 a');
        commit_hash_hrefs.each(function(i, e) {
            var url = e.href;
            var diff_url = url.replace(/\/commits\//, '/files/') + '..HEAD'
            $(e).parent().append('<a href="' + diff_url + '"class="link-gray">' + '🎯DIFF' + '</a>');
        });
    }
});
