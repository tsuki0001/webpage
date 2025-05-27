function Event() {
    let id1 = document.getElementById("event")
    let result = "今週の消化は終わってる？？";
    let count = 0;
    const now = new Date();
    const weekday = ["日","月","火","水","木","金","土"];

    // 曜日、次の日の曜日、時間、日付を取得
    const wd = weekday[now.getDay()];
    const nwd = weekday[now.getDay()+1];
    const t = now.getHours();
    const d = now.getDate();

    // 第何週目なのかを判定。上が今日、下が明日
    // if (t < 12){
    //     for (i=d; i>0; i-=7){
    //         count += 1;
    //     }
    // }else{
    //     for (i=d+1; i>0; i-=7){
    //         count += 1;
    //     }
    // }

    // １２時以降なら明日、以前なら今日のゴミの日を表示
    if (t >= 0){
        if(wd == "火"){
            result = "今日は週制限リセット日！";
        }else if(wd =="金"){
            result = "今日はファッションチェックの採点日です！";
        }else if(wd == "土"){
            result = "今日はくじテンダーの発表日です！";
        }else if(wd == "日"){
            result = "今週やることは全部終わった？";
        }
    };
    return result;
};
