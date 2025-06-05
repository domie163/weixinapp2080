const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot03f1h/",
            name: "springboot03f1h",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot03f1h/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "医院核酸检测服务系统"
        } 
    }
}
export default base
