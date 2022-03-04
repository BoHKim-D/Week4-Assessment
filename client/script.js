const baseURL = "http://localhost:4000/api"

const compliment = document.getElementById("complimentButton");
const fortune = document.getElementById("fortuneButton");
const deletes = document.getElementById("deleteFortune");
const adds = document.getElementById('addButton');
const compAdd = document.getElementById('addComp');

compliment.onclick = () => {
    axios.get(`${baseURL}/compliment`).then(res => {
        const data = res.data;
        alert(data);
    });
};

fortune.onclick = () => {
    axios.get(`${baseURL}/fortune`).then(res => {
        let index = res.data.length
        const data = res.data;
        if(index > 0){
            alert(data);
        } else if (index === 0) {
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

adds.onclick = (e) => {
    e.preventDefault();
    const fortuneText = document.getElementById('fortuneText').value;
    // console.log(fortuneText)
    axios.post(`${baseURL}/fortune`, {'str':fortuneText}).then(res => {
        const data = 'you just added your own fortune!'
        alert(data);

    });
};

compAdd.onclick = (e) => {
    e.preventDefault();
    const compText = document.getElementById('complimentText').value;
    axios.put(`${baseURL}/compliment`, {'str':compText}).then(res => {
        alert('you edited your own compliment!');
    })
}



