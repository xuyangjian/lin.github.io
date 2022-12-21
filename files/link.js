var link = {
    //亚博
    yaboPc: 'https://www.f5hpk.com:8004/register/?i_code=51287821',                //亚博电脑
    yaboH5: 'https://www.gdbi8.com:9506/entry/register/?i_code=51287821',          //亚博h5
    yaboApp: 'https://www.t900z.com:9508/?i_code=51287821',                        //亚博aap
    
    //乐鱼
    leyuPc: 'https://www.f5hpk.com:8004/register/?i_code=51287821',                  //爱游戏电脑
    leyuH5: 'https://www.gdbi8.com:9506/entry/register/?i_code=51287821',       //爱游戏h5 
    leyuApp: 'https://www.t900z.com:9508/?i_code=51287821',                          //爱游戏app  
    
    //客服                                                        
    contact: 'https://www.1aaic.com:9966/?i_code=51287821'                                
}



function getDevice() {
    if (/(Android|IOS|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry)/i.test(navigator.userAgent)) {
        return 'mobile'
    } else {
        return 'pc'
    }
}
const device = getDevice();



function register(key) {
    if (key === 'yabo') {
        window.location.href = device == 'pc' ? link.yaboPc : link.yaboH5;
    } else if( key === 'leyu') {
        window.location.href = device == 'pc' ? link.leyuPc : link.leyuH5;
    } else {
        window.location.href = link[key]
    }
}

function contact () {
    window.open(link.contact);
}

