package org.dhbw.mosbach.ai.simpledemo.beans;

import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Named
@RequestScoped
public class RequestBean {
	private static final Logger logger = LoggerFactory.getLogger(RequestBean.class);

	private String uuid;
	private int counter;

	@PostConstruct
	private void init() {
		uuid = UUID.randomUUID().toString();
		logger.info("Initializing request bean [{}]...", uuid);
	}

	@PreDestroy
	private void destroy() {
		logger.info("Destroying request bean [{}]...", uuid);
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
