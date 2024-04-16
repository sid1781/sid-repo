/*
In Java, a collection refers to a group of objects or elements that are grouped together as a single unit.
Java provides the java.util package, which includes a set of interfaces and classes to work with collections.
 Collections provide a convenient way to organize and manipulate groups of objects.
 Collection Interface:

The Collection interface is the root interface in the Java Collections Framework. It defines the basic operations that all collections should support, such as adding, removing, and iterating over elements.
java
Copy code
import java.util.Collection;
List Interface:

The List interface extends Collection and represents an ordered collection of elements. Elements in a list are stored in a sequential manner and can be accessed by their index.
java
Copy code
import java.util.List;
Example of a List (specifically, an ArrayList):

import java.util.ArrayList;

List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

System.out.println(names); // Output: [Alice, Bob, Charlie]
Set Interface:

The Set interface extends Collection and represents a collection of unique elements. Duplicates are not allowed in a set.
java
Copy code
import java.util.Set;
Example of a Set (specifically, a HashSet):

java
Copy code
import java.util.HashSet;

Set<Integer> numbers = new HashSet<>();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(2); // Duplicate element, not added

System.out.println(numbers); // Output: [1, 2, 3]
Map Interface:

The Map interface represents a collection of key-value pairs, where each key is associated with exactly one value. It does not extend the Collection interface.
java
Copy code
import java.util.Map;
Example of a Map (specifically, a HashMap):

java
Copy code
import java.util.HashMap;

Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Charlie", 28);

System.out.println(ages.get("Bob")); // Output: 30
Iterator Interface:

The Iterator interface provides a way to iterate over the elements of a collection. It is used to sequentially access elements of a collection without exposing the underlying representation.
java
Copy code
import java.util.Iterator;
Example of using an iterator with a List:
Iterator<String> iterator = names.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
These are just a few examples of the collection types provided by the Java Collections Framework. The framework also includes other interfaces and classes, such as Queue, Deque, and utility classes in the Collections class, which provide various algorithms for manipulating collections. Choosing the appropriate collection type depends on the specific requirements of your application.
 */
//ArrayList:List Interface:
//
//The List interface extends Collection and represents an ordered collection of elements.
// Elements in a list are stored in a sequential manner and can be accessed by their index.

import java.util.ArrayList;

//Will be using Array list for adding the objects or removing them , or adding the objects at an certain index and accessing them.
// we have someMethds in arrayList such as
//add
//add(Index , value We want to add)
//addall
//.get
//contains
//indexOf
//lastIndexof
public class CWH_91_Collections {

    public static void main(String[] args) {
        ArrayList<Integer> li = new ArrayList<>(5);
        ArrayList<Integer> l2= new ArrayList<>();
        l2.add(15);
        l2.add(16);
        l2.add(17);
        li.add(5);
        li.add(6);
        li.add(7);
        li.add(8);
        li.add(6);
        li.add(0, 23);
        li.set(1,566); //It will add the element at index one with 566 value
//        li.addAll(l2);
        li.addAll(0, l2);
//        li.clear();
        for (int i=0; i< li.size(); i++){
            System.out.println(li.get(i));
        }
        System.out.println(li.indexOf(6));//Whenever we use index method then indexOf method will return first occurrence from an arrayList.
        //If we want to know the last repeating index value then will use lastIndexOf
        System.out.println(li.contains(8));
        System.out.println(li.lastIndexOf(6));
    }

}
