<script>
    import { onDestroy} from 'svelte'
    import FloatingActionBtn from './FloatingActionBtn.svelte'
    import { socket,optionsDrawer as options } from '../../stores/store'
    import { setData } from "../../stores/fileSys";

    export let type;
    export let collection;

    let text="Connect";
    let isConnected;


    function toggleText(){
        if(text === "Connect") text = "Disconnect"
        else text = "Connect"
    }

    function connectSocket(){
        toggleText()

        if(!isConnected) {
            socket.on(`${type}-data`, (data) => {
                console.log(data)
                collection.update(old => [...old,data.fullDocument])});
            isConnected = true;
        }else{
            socket.disconnect()
            isConnected = false
        }
    }

    onDestroy(() => {
    socket.disconnect()
    if(type === "temp") setData($collection, options[0].name)
    if(type === "humid") setData($collection, options[1].name)
    if(type === "press") setData($collection, options[2].name)
    })
</script>

<FloatingActionBtn>
    <h4 on:click={connectSocket}>{text}</h4>
</FloatingActionBtn>