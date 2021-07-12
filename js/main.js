function ShowLength(str) {
    document.getElementById("input_length").innerHTML = str.length + "文字";
    replace(/\n|\r\n/g,"");
    val= val.length;
}
$(function () {
    $('.lined').linedtextarea({
    });
});


// ファイルの保存
const textarea = document.querySelector("#textarea") // テキストエリア
const save = document.querySelector("#save") // 保存ボタン

save.addEventListener("click",function(){ // 保存ボタンを押したら
  let text = textarea.value // テキストエリアのテキスト
  let blob = new Blob([text], {type:"text/plain"})
  let a = document.createElement("a") // ダウンロード用のリンク作成
  a.href = window.URL.createObjectURL(blob)
  a.download = 'テキストファイル.txt' // 保存するファイル名
  document.body.appendChild(a) // リンクをDOMに追加
  a.click() // ダウンロードリンクをクリック
})
// クリップボードにコピー
        function copyToClipboard() {
            // コピー対象をJavaScript上で変数として定義する
            var copyTarget = document.getElementById("textarea");

            // コピー対象のテキストを選択する
            copyTarget.select();

            // 選択しているテキストをクリップボードにコピーする
            document.execCommand("Copy");

            // コピーをお知らせする
            alert("Copied!");
        }