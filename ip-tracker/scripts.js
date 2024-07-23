function search() {
    let input = document.forms['ip-form']['ip-input'].value;
    if (!validate(input)) {
        alert('Incorrect IP');
        return;
    }
    
}

function validate(input) {
    const regex = new RegExp(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
    return regex.test(input);
}