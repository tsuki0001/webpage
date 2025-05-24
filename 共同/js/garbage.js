function garbage() {
    let id1 = document.getElementById("id1")
    let result = "今日はゴミ出しの日ではありません。";
    let count = 0;
    const now = new Date();
    const weekday = ["日","月","火","水","木","金","土"];

    // 曜日、次の日の曜日、時間、日付を取得
    const wd = weekday[now.getDay()];
    const nwd = weekday[now.getDay()+1];
    const t = now.getHours();
    const d = now.getDate();

    // 第何週目なのかを判定。上が今日、下が明日
    if (t < 12){
        for (i=d; i>0; i-=7){
            count += 1;
        }
    }else{
        for (i=d+1; i>0; i-=7){
            count += 1;
        }
    }

    // １２時以降なら明日、以前なら今日のゴミの日を表示
    if (t < 12){
        if(wd == "月" || wd == "木"){
            result = "今日は燃えるゴミの日です。";
        }else if(wd =="水"){
            if(count == 1 || count == 3){
                result = "今日は缶、ビンの日です。";
            }else if(count == 2 || count == 4){
                result = "今日はペットボトル、燃えないゴミの日です。";
            }
        };
    }else{
        if (nwd == "月" || nwd == "木"){
            result = "明日は燃えるゴミの日です。";
        }else if(nwd =="水"){
            if(count == 1 || count == 3){
                result = "明日は缶、ビンの日です。";
            }else if(count == 2 || count == 4){
                result = "明日はペットボトル、燃えないゴミの日です。";
            }
        }
    }
    return result;
};


