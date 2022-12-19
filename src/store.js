import { seedData } from './seed';
import { reactive } from 'vue';

export const store = {
    state : {
        data: reactive(seedData)
    },
    
}