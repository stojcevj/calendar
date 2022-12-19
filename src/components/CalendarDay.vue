<template>
    <div class="bg-dark">
        <div class="text-center text-white"> {{ day.abbvTitle }}</div>
        <div class="d-block">
            <div>{{ day.id }}</div>
            <CalendarEvent v-for="(event, day) in day.events"
                :key="index"
                :event="event"
                :day="day"
            />
        </div>
    </div>
</template>

<script>
    import CalendarEvent  from './CalendarEvent.vue';
    import { store } from '../store.js'

    export default{
        name: 'CalendarDay',
        props: ['day'],
        methods:{

        },
        components: {
            CalendarEvent
        }
    }
</script>