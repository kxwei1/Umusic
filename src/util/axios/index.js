import http from './axios'
//封装接口


export function personalized(params) {
    return http.get('/personalized', {
        params
    })
}

//封装一个轮播图接口
export function banner() {
    return http.get('/banner')
}

export function newsong() {
    return http.get('/personalized/newsong')
}


export function getHotList() {
    return http.get('/playlist/detail?id=3778678')
}


export function searchHot() {
    return http.get('/search/hot')
}

export function searchInfo(params) {
    return http.get('/search', {
        params
    })
}

export function suggestedSearch(params) {
    return http.get('/search/suggest', {
        params
    })
}


export function getPlayList(params) {
    return http.get('/playlist/detail', {
        params
    })
}
export function getPlayComment(params) {
    return http.get('/comment/playlist', {
        params
    })
}

export function getLyric(params) {
    return http.get('/lyric', {
        params
    })
}
export function getUrl(params) {
    return http.get('/song/url', {
        params
    })
}
export function getSongDetail(params) {
    return http.get('/song/detail', {
        params
    })
}