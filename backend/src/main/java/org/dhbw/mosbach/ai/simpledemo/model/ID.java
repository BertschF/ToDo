package org.dhbw.mosbach.ai.simpledemo.model;

import java.util.UUID;

class ID {
    private String id;

    ID() {
        this.id = UUID.randomUUID().toString();
    }

    String getId() {
        return id;
    }
}
