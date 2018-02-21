// チャットワークオプション
var opt = {
    token: '【ここにチャットワークのToken】',
    room_id: '【ここにチャットワークのルームID】'
};

function sendMessage() {

    /**
     * チャットワークにメッセージを投稿
     */

    var params = {
        headers : {
            'X-ChatWorkToken': opt.token
        },
        method : 'post',
        payload : {
            body : 'これは投稿テストです。'
        }
    };

    var url = 'https://api.chatwork.com/v2/rooms/' + opt.room_id + '/messages';

     UrlFetchApp.fetch(url, params);
}