package org.dhbw.mosbach.ai.simpledemo.beans;

import java.io.Serializable;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Named
@SessionScoped
public class SessionBean implements Serializable {
	private static final Logger logger = LoggerFactory.getLogger(SessionBean.class);
	private static final long serialVersionUID = 1L;

	private String uuid;
	private int counter;

	@PostConstruct
	private void init() {
		uuid = UUID.randomUUID().toString();
		logger.info("Initializing session bean [{}]...", uuid);
	}

	@PreDestroy
	private void destroy() {
		logger.info("Destroying session bean [{}]...", uuid);
	}

	public String getUUID() {
		return uuid;
	}

	public int getCounter() {
		return counter;
	}

	public void incrementCounter() {
		counter++;
	}

}
