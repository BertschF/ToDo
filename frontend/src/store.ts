import Vue from 'vue';
import Vuex from 'vuex';

import { ITag } from './model/tag';
import { IProject } from './model/project';
import { ITask } from './model/task';
import { sameDay, before, addDays } from './services/date';
import { State } from './model/state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: new Array<ITask>(),
    projects: new Array<IProject>(),
    tags: new Array<ITag>(),
  },
  getters: {
    openTasks: (state) => state.tasks.filter((task) => task.state === State.Open),
    overDueTasks: (state) => state.tasks.filter((task) => before(task.dueDate, new Date(Date.now()))),
    todayTasks: (state) => state.tasks.filter((task) => sameDay(task.dueDate, new Date(Date.now()))),
    next7DaysTasks: (state) => state.tasks.filter((task) => before(task.dueDate, addDays(new Date(Date.now()), 7))),
  },
  mutations: {

  },
  actions: {

  },
});
