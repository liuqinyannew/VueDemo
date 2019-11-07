export  default {
    async getHomeData (){
        let res = await  fetch('http://localhost:3000/dangdang')
        let data = await  res.json()
        return data
    }
}