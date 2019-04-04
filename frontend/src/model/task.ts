import { Priority } from './priority';

export interface ITask {
    id: string;
    description: string;
    finished?: boolean;
    dueDate?: string;
    repetitionType?: string;
    priority?: Priority;
    projectId?: string;
    tagIds?: string[];
}
