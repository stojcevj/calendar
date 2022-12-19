<template>
    <div :style="getEventBackgroundColor">
        <div v-if="!event.edit">
            <span class="text-center">
                {{  event.details }}
            </span>
            <div class="d-flex justify-content-center">
                <i class="fa fa-edit">
                    del
                </i>
                <i class="bi bi-trash"></i>
            </div>
        </div>

        <div v-if="event.edit">

        </div>
    </div>
</template>
<script>
    import { store } from '../store.js'

    export default {
        name:'CalendarEvent',
        props: ['event', 'day'],
        data () {
            return{
                newEventDetails: ''
            }
        },
        computed : {
            getEventBackgroundColor(){
                const color = ['#FF9999', '#85D6FF', '#99FF99'];
                let randomColor = color[Math.floor(Math.random() * color.length)];
                return `background-color: ${randomColor}`;
            }
        }
    }
</script>