import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [],
        totalCompleted: 0,
    },
    getters: {
        totalCompleted: state => {
            let total = 0;
            state.tasks.forEach(task => {
                total += task.numOfTimers;
            });
            state.totalCompleted = total;
            return state.totalCompleted;
        }
    },

    mutations: {
        addTask: (store, task) => {
            store.tasks.push(task);
        },
        removeTask: (store, taskId) => {
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    store.tasks.splice(task, 1);
                }
            });
        },
        playTimer: (store, taskId) => {
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    task.isRunning = true;
                }
            });
        },
        pauseTimer: (store, taskId) => {
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    task.isRunning = false;
                }
            });
        },
        resetTimer: (store, taskId) => {
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    task.isRunning = false;
                    task.minutes = "25:00";
                    task.time = 100;
                    task.totalSeconds = 1500;
                }
            });
        },
        resetShortBreakTimer: (store, taskId) => {
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    task.shortBreak.isRunning = false;
                    task.shortBreak.minutes = "5:00";
                    task.shortBreak.totalSeconds = 300;
                }
            });
        },
        resetLongBreakTimer: (store, taskId) => {
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    task.longBreak.isRunning = false;
                    task.longBreak.minutes = "20:00";
                    task.longBreak.totalSeconds = 1200;
                }
            });
        },
        totalAmountOfTasks(store, taskId){
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    task.numOfTimers += 1;
                }
            });
            store.totalCompleted += 1;
        },
        playShortBreak(store, taskId){
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    task.shortBreak.isRunning = true;
                }
            });
        },
        playLongBreak(store, taskId){
            store.tasks.filter(function(task){
                if (task.id === taskId) {
                    task.longBreak.isRunning = true;
                }
            });
        }
    },

    //actions can be async action.commit('mutation')
    actions: {
        addTask({ commit }, task) {
            try {
                commit('addTask', task);
            } catch(e) {
                console.log(e);
            }
        },
        removeTask({ commit }, taskId) {
            commit('removeTask', taskId);
        },
        playTimer({ commit }, taskId) {
            commit('playTimer', taskId);
        },
        pauseTimer({ commit }, taskId) {
            commit('pauseTimer', taskId);
        },
        resetTimer({ commit }, taskId) {
            commit('resetTimer', taskId);
        },
        resetShortBreakTimer({commit}, taskId) {
            commit('resetShortBreakTimer', taskId);
        },
        resetLongBreakTimer({commit}, taskId) {
            commit('resetLongBreakTimer', taskId);
        },
        totalAmountOfTasks({ commit }, taskId) {
            commit('totalAmountOfTasks', taskId);
        },
        playShortBreak({ commit }, taskId) {
            commit('playShortBreak', taskId);
        },
        playLongBreak({ commit }, taskId) {
            commit('playLongBreak', taskId);
        }
    }
})