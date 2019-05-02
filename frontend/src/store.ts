import Vue from 'vue';
import Vuex, {ActionPayload} from 'vuex';

import {ITag} from './model/tag';
import {IProject} from './model/project';
import {ITask} from './model/task';
import {addDays, before, sameDay} from './services/date';
import {State} from './model/state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: new Array<ITask>(
        {
          id: '129sug9asdfio',
          description: 'Backend API implementieren',
          state: State.Open,
        },
        {
          id: '123541',
          description: 'other task',
          state: State.Open,
        },
        {
          id: '653',
          description: 'Due Today',
          state: State.Open,
          dueDate: new Date(),
        },
        {
          id: '156442',
          description: 'Due Tomorrow',
          state: State.Open,
          projectId: 'pa1',
          dueDate: addDays(new Date(), 1),
        },
    ),
    projects: new Array<IProject>({id: '123', name: 'Health', color: '#fff'} as IProject),
    tags: new Array<ITag>(),
  },
  getters: {
    tasks: (state): ITask[] => state.tasks,
    openTasks: (_, getters) => getters.tasks
        .filter((task: ITask) => task.state === State.Open),
    overDueTasks: (_, getters) => getters.openTasks
        .filter((task: ITask) => before(task.dueDate, new Date())),
    todayTasks: (_, getters) => getters.openTasks
        .filter((task: ITask) => sameDay(task.dueDate, new Date())),
    next7DaysTasks: (_, getters) => getters.openTasks
        .filter((task: ITask) => before(task.dueDate, addDays(new Date(), 7))),
    projectById: ((state) => (projectId: string): IProject | undefined => {
      return state.projects.find((project) => project.id === projectId);
    }),
    tagById: ((state) => (tagId: string): ITag | undefined => {
      return state.tags.find((tag) => tag.id === tagId);
    }),
    tasksForProject: ((_, getters) => (projectId: string): ITask[] => {
      return getters.openTasks.filter((task: ITask) => task.projectId === projectId);
    }),
    tasksForTag: ((_, getters) => (tagId: string): ITask[] => {
      return getters.openTasks.filter((task: ITask) => task.tagIds !== undefined && task.tagIds.indexOf(tagId) !== -1);
    }),
  },
  mutations: {
    changeTaskState(state, payload) {
      const task = (state.tasks.find((value) => value.id === payload.taskId) as ITask);
      if (task === undefined) {
        // tslint:disable-next-line:no-console
        console.error(`Wasn't able to find task with id ${payload.id} in the store`);
        return;
      }
      task.state = payload.state;
    },
    createTask(state, payload: ITask) {
      state.tasks.push(payload);
    },
    createProject(state, payload) {
      state.projects.push({id: Date.now() + '', name: payload.name, color: payload.color} as IProject);
    },
    createTag(state, payload) {
      state.tags.push({id: Date.now() + '', name: payload.name, color: payload.color} as IProject);
    },
    renameProject(state, payload) {
      const index = state.projects.findIndex(payload.id);
      const project = state.projects[index];
      state.projects[index] = {id: project.id, name: payload.name, color: project.color};
    },
    renameTag(state, payload) {
      const index = state.tags.findIndex(payload.id);
      const tag = state.tags[index];
      state.tags[index] = {id: tag.id, name: payload.name, color: tag.color};
    },
  },
  actions: {
    // actions will perform all occuring http requests
    changeTaskState(context, payload: ActionPayload) {
      context.commit('changeTaskState', payload.payload);
    },
    createTask(context, payload: ActionPayload) {
      context.commit('createTask', payload.payload as ITask);
    },
    createProject(context, payload: ActionPayload) {
      context.commit('createProject', payload.payload);
    },
    createTag(context, payload: ActionPayload) {
      context.commit('createTag', payload.payload);
    },
    renameProject(context, payload: ActionPayload) {
      context.commit('renameProject', payload.payload);
    },
    renameTag(context, payload: ActionPayload) {
      context.commit('renameTag', payload.payload);
    },
  },
});
