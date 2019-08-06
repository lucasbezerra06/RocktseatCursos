var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.github.com/users/diego3g')
xhr.send(null);

xhr.onreadystatechange = () => {
    if(xhr.readyState ===4){
        console.log(JSON.parse(xhr.responseText))
    }
}