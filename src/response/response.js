//Mock API
export const RESP = {
    POSTSIGNUP : {
            
                status: true,
                http: "202 ok",
                message: "회원가입되었습니다.",
            
    },
    POSTUSERLOGIN : {
                status: true,
                http: "202 ok",
                message: "로그인하였습니다.",
                username: "isabel00",
                nickname: "isabel"
            
        
    },
    GETUSERAUTH : {
                status: true,
                http: "202 ok",
                nickname: "isabel",
                username: "isabel22",
            
        
    },
    GETAPIHOBBIES : {
        result: [
            {
                id: "0",
                title: "골프",
                img: "simba 복사본.png",
                nickname: "isabel",
                date: "2022-04-09",
                commentCounts: 10,
            },
            {
                id: "1",
                title: "터프팅",
                img: "simba 복사본.png",
                nickname: "isabella",
                date: "2022-04-08",
                commentCounts: 20,
            },
            {
                id: "2",
                title: "등산",
                img: "simba 복사본.png",
                nickname: "sharon",
                date: "2022-04-13",
                commentCounts: 30,
            },
        ]
    },
}