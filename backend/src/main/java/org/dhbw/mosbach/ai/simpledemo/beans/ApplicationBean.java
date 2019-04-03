package org.dhbw.mosbach.ai.simpledemo.beans;

import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Named
@ApplicationScoped
public class ApplicationBean {
	private static final Logger logger = LoggerFactory.getLogger(ApplicationBean.class);

	private String uuid;
	private int counter;

	@PostConstruct
	private void init() {
		uuid = UUID.randomUUID().toString();
		logger.info("Initializing application bean [{}]...", uuid);
	}

	@PreDestroy
	private void destroy() {
		logger.info("Destroying application bean [{}]...", uuid);
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
