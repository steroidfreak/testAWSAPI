// let url = "https://2apk9uqmtg.execute-api.ap-southeast-1.amazonaws.com/default/testHelloword";
// let url = "https://ctbgpt.azurewebsites.net/api/httpTrigger1?";
let url = "https://desmondchuachatgpt.azurewebsites.net/api/HttpTrigger1?code=R3u6UxvGtJggJjIU0gp4d3IrCxBfBUA64hS0kfWIHpmAAzFuSSfZCg%3D%3D"

// const data = {
//     name: 'Desmond'
//   };

async function getAWS_Data(){
    
    // let response = await axios.get('https://desmondchuachatgpt.azurewebsites.net/api/HttpTrigger1?', {
    //     withCredentials: true,
    //     params: {
    //     code: 'R3u6UxvGtJggJjIU0gp4d3IrCxBfBUA64hS0kfWIHpmAAzFuSSfZCg=='
    //     }
    // })

    // console.log(response);

    // let response = await axios.post('https://desmondchuachatgpt.azurewebsites.net/api/HttpTrigger1', {
    //     message: data
    //   }, {
    //     withCredentials: true,
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     params: {
    //       code: 'R3u6UxvGtJggJjIU0gp4d3IrCxBfBUA64hS0kfWIHpmAAzFuSSfZCg=='
    //     }
    //   })

    //   console.log(response);



const data = {
  name: 'Desmond'
};

await axios.post(url, data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

}

getAWS_Data();