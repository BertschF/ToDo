import { Priority } from './priority';

export interface ITask {
    id: string;
    description: string;
    dueDate?: string;
    repetitionType?: string;
    priority?: Priority;
    projectId?: string;
    tagIds?: string[];
}
