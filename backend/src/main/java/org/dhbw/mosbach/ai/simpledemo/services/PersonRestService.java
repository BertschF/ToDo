package org.dhbw.mosbach.ai.simpledemo.services;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.dhbw.mosbach.ai.simpledemo.beans.PersonDemoDataBean;
import org.dhbw.mosbach.ai.simpledemo.model.Person;

@RequestScoped
@Path("/person")
public class PersonRestService
{
	@Inject
	private PersonDemoDataBean personDemoDataBean;

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Person[] getAllPersons()
	{
		return personDemoDataBean.getDemoData().toArray(new Person[personDemoDataBean.getDemoData().size()]);
	}

	@POST
	@Path("/new")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean addPerson(Person person)
	{
		System.out.println("About to add " + person);
		return personDemoDataBean.getDemoData().add(person);
	}
}
