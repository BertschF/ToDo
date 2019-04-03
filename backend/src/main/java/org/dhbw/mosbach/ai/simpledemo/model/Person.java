/**
 *
 */
package org.dhbw.mosbach.ai.simpledemo.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Person
{
	private String givenName;
	private String familyName;

	private int yearOfBirth;
	private String email;

	public Person()
	{
		super();
	}

	public static Person c(String givenName, String familyName, int yearOfBirth, String email)
	{
		final Person p = new Person();
		p.givenName = givenName;
		p.familyName = familyName;
		p.yearOfBirth = yearOfBirth;
		p.email = email;

		return p;
	}

	public String getGivenName()
	{
		return givenName;
	}

	public void setGivenName(String givenName)
	{
		this.givenName = givenName;
	}

	public String getFamilyName()
	{
		return familyName;
	}

	public void setFamilyName(String familyName)
	{
		this.familyName = familyName;
	}

	public int getYearOfBirth()
	{
		return yearOfBirth;
	}

	public void setYearOfBirth(int yearOfBirth)
	{
		this.yearOfBirth = yearOfBirth;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((familyName == null) ? 0 : familyName.hashCode());
		result = prime * result + ((givenName == null) ? 0 : givenName.hashCode());
		result = prime * result + yearOfBirth;
		return result;
	}

	@Override
	public boolean equals(Object obj)
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		final Person other = (Person) obj;
		if (email == null)
		{
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (familyName == null)
		{
			if (other.familyName != null)
				return false;
		} else if (!familyName.equals(other.familyName))
			return false;
		if (givenName == null)
		{
			if (other.givenName != null)
				return false;
		} else if (!givenName.equals(other.givenName))
			return false;
		if (yearOfBirth != other.yearOfBirth)
			return false;
		return true;
	}

	@Override
	public String toString()
	{
		return String.format("Person [givenName=%s, familyName=%s, yearOfBirth=%s, email=%s]", givenName, familyName,
				Integer.valueOf(yearOfBirth), email);
	}
}
