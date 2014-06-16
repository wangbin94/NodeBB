/**
 * Created by Pzyme on 14-3-15.
 * Author Pzy.me (justmepzy@gmail.com)
 * Link http://pzy.me
 */


(function(module) {
    "use strict";
    //http://player.youku.com/player.php/sid/XNjg1NTg3MjA0_ev_3==/v.swf
    var Youku = {},
        embed = '<div class="video-container">' +
            '<iframe class="youku-plugin" src="http://player.youku.com/player.php/sid/$1==/v.swf" allowfullscreen></iframe>' +
            '</div>';

    Youku.parse = function(postContent, callback) {
        var	regularUrl = /<a href="(?:http?:\/\/)?(?:v\.)youku.com\/v_show\/id_([\w\-_]+)\.html">.+<\/a>/;

        if (postContent.match(regularUrl)) {
            postContent = postContent.replace(regularUrl, embed);
        }

        callback(null, postContent);
    };

    module.exports = Youku;
}(module));