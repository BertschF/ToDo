package org.dhbw.mosbach.ai.simpledemo.beans;

import com.google.common.collect.Lists;
import org.dhbw.mosbach.ai.simpledemo.model.Task;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class TodoBean {

    private final Task[] demoTasks = { new Task("Eier kaufen"),
                                       new Task( "Sport machen"),
                                       new Task("lernen")

    };

    private final List<Task> tasks = Lists.newArrayList(demoTasks);

    public List<Task> getDemoData(){
        return tasks;
    }

    //Write Task into DB
    public boolean save(Task task){
        return true;
    }

    //Get filtered Task
    public Task[] filteredtasks(String filter){

        return null;
    }
}
