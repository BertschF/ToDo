package org.dhbw.mosbach.ai.simpledemo.model;

import java.awt.*;

public class Project{
    private ID id;
    private String name;
    private Color color;

    public Project(String name, Color color) {
        this.id = new ID();
        this.name = name;
        this.color = color;
    }

    public String getId() {
        return id.getId();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }
}
