export  default {
    async getHomeData (){
        let res = await  fetch('http://localhost:30001/dangdang')
        let src = await res.json()
        return src
    }
}