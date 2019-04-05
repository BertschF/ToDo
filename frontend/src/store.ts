import Vue from 'vue';
import Vuex from 'vuex';

import { ITag } from './model/tag';
import { IProject } from './model/project';
import { ITask } from './model/task';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: new Array<ITask>(),
    projects: new Array<IProject>(),
    tags: new Array<ITag>(),
  },
  mutations: {

  },
  actions: {

  },
});
