import { Priority } from './priority';
import { State } from './state';

export interface ITask {
    id: string;
    description: string;
    state: State;
    dueDate?: string;
    repetitionType?: string;
    priority?: Priority;
    projectId?: string;
    tagIds?: string[];
}
