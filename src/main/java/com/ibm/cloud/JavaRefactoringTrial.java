package com.ibm.cloud;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

public class JavaRefactoringTrial {
	public static void main(String[] args) {
		List<Person> personList = new ArrayList<Person>();

		try {
			personList.addAll(PersonLoader.loadPersonRecordsFromSpaceFile());
			personList.addAll(PersonLoader.loadPersonRecordsFromPipeFile());
			personList.addAll(PersonLoader.loadPersonRecordsFromCommaFile());

			PersonOutputGenerator.generateOutput1(personList, PersonOutputGenerator.genderThenLastNameAsc);
			PersonOutputGenerator.generateOutput2(personList, dobThenLastNameAsc);
			PersonOutputGenerator.generateOutput3(personList, LastNameDesc);

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
}
