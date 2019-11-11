export  default {
    async getHomeData (){
        let res = await  fetch('http://localhost:3000/dangdang')
        let src = await res.json()
        return src
    }
}