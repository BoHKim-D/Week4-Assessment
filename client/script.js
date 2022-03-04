const baseURL = "http://localhost:4000/api"

const compliment = document.getElementById("complimentButton");
const fortune = document.getElementById("fortuneButton");
const deletes = document.getElementById("deleteFortune");
const adds = document.getElementById('addButton')


compliment.onclick = () => {
    axios.get(`${baseURL}/compliment`).then(res => {
        const data = res.data;
        alert(data);
    });
};

fortune.onclick = () => {
    axios.get(`${baseURL}/fortune`).then(res => {
        const data = res.data;
        if(data){
            alert(data);
        } else {
            alert('YOU HAVE NO FORTUNE!')
        }
    });
};

deletes.onclick = () => {
    axios.delete(`${baseURL}/fortune`).then(res => {
        const data = 'you just deleted your fortunes.'
        alert(data);
    });
};

adds.onclick = () => {
    axios.post(`${baseURL}/fortune`).then(res => {
        const data = 'you just added your own fortune!'
        alert(data);
    });
};



