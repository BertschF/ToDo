/**
 *
 */
package org.dhbw.mosbach.ai.simpledemo.beans;

import java.io.Serializable;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;

import org.dhbw.mosbach.ai.simpledemo.model.Person;

import com.google.common.collect.Lists;

/**
 * @author Alexander.Auch
 *
 */
@Named
@ApplicationScoped
public class PersonDemoDataBean implements Serializable
{
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	private final Person[] DEMO_DATA = { Person.c("Elmer", "Fudd", 1937, "elmer.fudd@example.org"),
			Person.c("Bugs", "Bunny", 1938, "carrotsaremyfavorite@example.org"),
			Person.c("Daffy", "Duck", 1937, "crankymostofthetime@example.org") };

	private final List<Person> demoData = Lists.newArrayList(DEMO_DATA);

	/**
	 * @return a modifiable list holding demo data.
	 */
	public List<Person> getDemoData()
	{
		return demoData;
	}
}
