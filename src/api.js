const base_url = 'https://www.boredapi.com/api/';
export async function getRandomActivity(){
    const response = await fetch(base_url+"activity");
    if(response.ok){
        const activity = await response.json();
        return activity;
    } else {
        throw 'Server response error '+response.status;
    }
}
