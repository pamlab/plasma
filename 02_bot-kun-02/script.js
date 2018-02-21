// メンバー・役割のデータをスプレッドシートから取得
var url = "【ここにスプレッドシートのURL】";
var spreadsheet = SpreadsheetApp.openByUrl(url);
var sheet   = spreadsheet.getActiveSheet();
var lastrow = sheet.getLastRow();

var members = sheet.getSheetValues(2, 1, lastrow - 1, 1); // メンバーを取得
var roles   = sheet.getSheetValues(2, 2, lastrow - 1, 2); // 役割を取得

// チャットワークオプション
var opt = {
    token: '【ここにチャットワークのToken】',
    room_id: '【ここにチャットワークのルームID】'
};

function changeDuty() {
    var todaysRoles = rotate(members);

    for (var i = 0; i < todaysRoles.length; i++) {
        // 割り当てた結果をスプレッドシートにも反映させる
        sheet.getRange(i + 2, 1).setValue(todaysRoles[i]);
    }

    // チャットワークへ更新後の内容を投稿
    sendMessage();
}

function rotate(array) {

    /**
     * メンバー表を一つずらし更新
     */

    array.push(array[0]);
    array.shift();
    return array;
}

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
            body : '[info][title]今月のパム通当番のお知らせ。[/title]お疲れ様です！\n本日の朝の共有チップス当番は…' + members[0] + 'さんとなります！\n\nよろしくお願いします！[/info]'
        }
    };

    var url = 'https://api.chatwork.com/v2/rooms/' + opt.room_id + '/messages';
    UrlFetchApp.fetch(url, params);
}