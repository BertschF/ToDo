package org.dhbw.mosbach.ai.simpledemo.beans;

import java.io.Serializable;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.faces.view.ViewScoped;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Named
@ViewScoped
public class ViewBean implements Serializable {
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LoggerFactory.getLogger(ViewBean.class);

	private String uuid;
	private int counter;

	@PostConstruct
	private void init() {
		uuid = UUID.randomUUID().toString();
		logger.info("Initializing view bean [{}]...", uuid);
	}

	@PreDestroy
	private void destroy() {
		logger.info("Destroying view bean [{}]...", uuid);
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
