import {getRandomActivity} from "./api";

console.log("Hello");

const rootDiv = document.getElementById('root');

const render = (activityTitle, isLoading) => {
    rootDiv.innerHTML = (isLoading)?
        `<h1>Loading...</h1>`:
        `
            <div>
                <h1>${activityTitle}</h1>
                <button id="btnReload">Reload</button>
            </div>    
        `;
}
async function reloadFunction (){
    render('', true);
    const activity = await getRandomActivity();
    render(activity.activity);
}
rootDiv.addEventListener('click',(event)=>{
    console.log(event.target.id);
    if (event.target.id === "btnReload"){
        reloadFunction();
    }
});
//render('Read book');
/*(
    async ()=>{
        render('', true);
        setTimeout(()=>{
            render('Read book');
        },5000);
    }
)();*/
(
    reloadFunction()
)();
