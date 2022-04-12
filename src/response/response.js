//Mock API
export const RESP = {
    POSTSIGNUP : {
        result: 
            {
                status: true,
                http: "202 ok",
                message: "회원가입되었습니다.",
            }
    },
    POSTUSERLOGIN : {
        result: 
            {
                status: true,
                http: "202 ok",
                message: "로그인하였습니다.",
                username: "isabel",
            }
        
    },
    GETUSERAUTH : {
        result: 
            {
                status: true,
                http: "202 ok",
                nickname: "isabel",
                username: "isabel22",
            }
        
    },
    GETAPIHOBBIES : {
        result: [
            {
                id: "isabel00",
                title: "골프",
                img: "simba 복사본.png",
                nickname: "isabel",
                date: "2022-04-09",
                commentCounts: 10,
            },
            {
                id: "isabel22",
                title: "터프팅",
                img: "simba 복사본.png",
                nickname: "isabella",
                date: "2022-04-08",
                commentCounts: 20,
            },
        ]
    },
}