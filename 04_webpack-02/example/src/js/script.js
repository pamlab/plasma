import $ from 'jQuery';           // モジュールの読み込み
import addEmoji from './script2'; // 絵文字を付与する関数を外部読み込み

$(function() {
    var message = addEmoji('成功です');

    $('#target').text(message);
});