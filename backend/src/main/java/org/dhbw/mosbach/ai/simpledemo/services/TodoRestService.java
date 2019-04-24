package org.dhbw.mosbach.ai.simpledemo.services;

import org.dhbw.mosbach.ai.simpledemo.beans.TodoBean;
import org.dhbw.mosbach.ai.simpledemo.model.Task;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@RequestScoped
@Path("/todos")
public class TodoRestService {

    @Inject
    private TodoBean todoBean;

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    public Task postTodos(Task task){
         todoBean.save(task);
         return task;
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Task[] getTodos(@PathParam("id") String filter){
        return todoBean.filteredtasks(filter);
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Task[] getAllTasks(){
        return todoBean.getDemoData().toArray(new Task[3]);
    }

}
