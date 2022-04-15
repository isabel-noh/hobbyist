// import React from "react";
// import { Button } from "@mui/material";

// const Upload = (props) => {

//     // const fileInput = React.useRef();
//     // const selectFile = (e) => {
//     //     console.log(e);
//     //     console.log(e.target); //<input type="file"..>
//     //     console.log(e.target.files[0]); //해당 파일 정보

//     //     console.log(fileInput.current.files[0])
//     // }
    const encodeFiletoBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageUrl(reader.result);
                resolve();
            }
        })
    }
//     const upload = () => {
//         let image = fileInput.current.files[0];
//         //const _upload = storage.ref(`images/${image.name}`).put(image); >>> firebase
//         //_upload.then((snapshot) => {
//         //console.log(snapshot);
//         //}
//         //업로드한 이미지의 다운로드 경로 가져오기 
//         //snapshot.ref.getDownloadURL().then((url)=> {
//         //     console.log(url);
//         // })
        
//     }
//     return (
//         <React.Fragment>
//             <input type="file" ref={fileInput} onChange={encodeFiletoBase64}/>
//             <Button onClick={upload}>업로드하기</Button>
//         </React.Fragment>
//     )
// }

// export default Upload;