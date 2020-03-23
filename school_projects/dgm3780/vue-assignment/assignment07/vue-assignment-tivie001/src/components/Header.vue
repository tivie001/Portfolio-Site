<template>
  <v-container fluid ml-4 mt-4>
    <v-row>
      <h2>My Tasks</h2>
      <v-btn class="mx-4" fab dark small color="green" @click="showAddTask = !showAddTask">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row align="center" v-if="showAddTask">
      <v-col cols="12" md="3">
        <v-text-field
                v-model="newTaskName"
                label="Task Name"
                required
        ></v-text-field>
      </v-col>
      <v-btn depressed small color="primary" v-on:click="addTask">Save Task</v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
      showAddTask: false,
      newTaskName: "",
      task: {}
    }),
    computed: {
      tasks(){
        return this.$store.state.tasks;
      }
    },
    methods: {
      assignData() {
        this.task = {
          id: this.tasks.length,
          name: this.newTaskName,
          dateAdded: (new Date()).toISOString().split('T')[0],
          time: 100,
          minutes: "25:00",
          numOfTimers: 0,
          interval: {},
          totalSeconds: 1500,
          isRunning: true,
          shortBreak: {
            minutes: "5:00",
            interval: {},
            totalSeconds: 300,
            isRunning: true,
            alreadyRan: false
          },
          longBreak: {
            minutes: "20:00",
            interval: {},
            totalSeconds: 1200,
            isRunning: true,
            alreadyRan: false
          }
        }
      },
      addTask() {
          this.assignData(this.task);
          this.$store.dispatch('addTask', this.task);
          this.countdownTimer(this.task);
      },
      countdownTimer(taskData) {
        const fractionTime = 100 / 1500;
        taskData.interval = setInterval(() => {
          if (taskData.time === 0) {
            this.$store.dispatch('resetTimer', taskData.id);
            this.$store.dispatch('totalAmountOfTasks', taskData.id);
          }
          if (taskData.isRunning){
            taskData.time -= fractionTime;
            taskData.totalSeconds -= 1;
            this.convertSecsToMin(taskData);
          }
        }, 1000)
      },
      convertSecsToMin(data){
        data.minutes = Math.floor(data.totalSeconds / 60) + ":" + (data.totalSeconds % 60 ? data.totalSeconds % 60 : '00');
      }
    }
  }
</script>

<style>
</style>
