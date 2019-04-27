package org.dhbw.mosbach.ai.simpledemo.model;

import java.util.Date;

public class Task {
    private ID id;
    private String description;
    private State state;
    private Date ExpiryDate;
    private Priority priority;
    private Project project;
    private Tag tags;
    //RepeatType

    public Task(String description) {
        this.id = new ID();
        this.description = description;
        this.state = State.Open;
    }

    public String getId() {
        return id.getId();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public Date getExpiryDate() {
        return ExpiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        ExpiryDate = expiryDate;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Tag getTags() {
        return tags;
    }

    public void setTags(Tag tags) {
        this.tags = tags;
    }
}
