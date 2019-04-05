package org.dhbw.mosbach.ai.simpledemo.model;

import org.mindrot.jbcrypt.BCrypt;

public class User {
    private String userName;
    private String email;
    private String profilePicture;
    private String password;
    private int score;

    public User(String userName, int score, String email, String profilePicture, String password) {
        this.userName = userName;
        this.score = score;
        this.email = email;
        this.profilePicture = profilePicture;
        this.password = BCrypt.hashpw(password, BCrypt.gensalt(12));
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public Boolean checkPassword(String candidate){
        return BCrypt.checkpw(candidate, password);
    }

    public void setPassword(String password) {
        this.password = BCrypt.hashpw(password, BCrypt.gensalt(12));
    }
}
