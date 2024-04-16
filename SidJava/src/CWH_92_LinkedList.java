/* a linked list is a data structure that consists of a sequence of elements where each element points to the next element in the sequence.
The last element in the list typically points to null. Java does not have a built-in linked list class,


Note: if we want to add the elements in an array without swapping the array elements will use the linked list.
linked list won't affect array element positions. but array list will affect.


*/

import java.util.LinkedList;

public class CWH_92_LinkedList {
    public static void main(String[] args) {

        LinkedList<Integer> li =new LinkedList<>();
        LinkedList<Integer> l2 =new LinkedList<>();

         li.add(5);
         li.add(10);
         li.add(15);
         li.add(20);
         li.add(0,25);
//        System.out.println(li.get(4));
        l2.add(40);
        l2.add(50);
        li.addAll(l2);
//        System.out.println(li.lastIndexOf(20));
        System.out.println(li.getFirst());
        System.out.println(li.indexOf(10));
        li.addLast(666);
        li.addFirst(555);
        System.out.println(li);
//        System.out.println(li.contains(10));


    }
}
