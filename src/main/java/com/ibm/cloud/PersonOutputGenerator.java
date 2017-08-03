package com.ibm.cloud;

import java.util.Comparator;
import java.util.List;

class PersonOutputGenerator {
  static void generateOutput1(List<Person> personList, String title, Comparator<Person> personComparator) {
    personList.sort(personComparator);
    printPersons(personList, title);
  }

}

  private static List<Person> printPersons(List<Person> personList) {
    return personList;
  }

  static void generateOutput2(List<Person> personList, Comparator<? super Person> personComparator) {
    printPersons(personList).sort(personComparator);
    System.out.println("\nOutput 2:\n");

    for(Person person : printPersons(personList)) {
      System.out.println(person);
    }
  }

  static void generateOutput3(List<Person> personList, Comparator<? super Person> personComparator) {
    personList.sort(personComparator);
    System.out.println("\nOutput 3:\n");

    for(Person person : personList) {
      System.out.println(person);
    }
  }
}
  Comparator<Person> genderThenLastNameAsc=new Comparator<Person>(){
// sort by Gender, then by LastName in ascending order
public int compare(Person p1,Person p2){
if(!p1.getGender().equals(p2.getGender())){
return p1.getGender().compareTo(p2.getGender());
}

return p1.getLastName().compareTo(p2.getLastName());
}
};
private Comparator<Person> dobThenLastNameAsc=new Comparator<Person>(){
// sort by DateOfBirth in ascending order, then by LastName in ascending order
public int compare(Person p1,Person p2){
if(p1.getDateOfBirth().compareTo(p2.getDateOfBirth())!=0){
return p1.getDateOfBirth().compareTo(p2.getDateOfBirth());
}

return p1.getLastName().compareTo(p2.getLastName());
}
};
Comparator<Person> LastNameDesc=new Comparator<Person>(){
// sort by LastName in descending order
public int compare(Person p1,Person p2){
return p2.getLastName().compareTo(p1.getLastName());
}
};

