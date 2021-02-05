$(function() {
    // github pull request main page
    if (document.URL.match(/https:\/\/github.com\/.*\/.*\/pull\/[0-9]+/)) {
        console.log('This is github pull request page');

        var commit_hash_hrefs = $('div.js-commit-group-commits .js-commit .text-right.ml-1 a');
        for (var i = 0; i < commit_hash_hrefs.length; i++) {
            var elem = commit_hash_hrefs[i];
            var prev_elem = null;
            var diff_url = null;
            if (i == 0) {
                var url = elem.href;
                diff_url = url.replace(/\/commits\/.*/, '/files/')
            } else {
                prev_elem = commit_hash_hrefs[i - 1];
                var url = prev_elem.href;
                diff_url = url.replace(/\/commits\//, '/files/') + '..HEAD'
            }
            $(elem).parent().append('<a href="' + diff_url + '"class="link-gray">' + '🎯DIFF' + '</a>');
        }
    }
});
