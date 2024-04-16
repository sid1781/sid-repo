//Abtstraction:hiding the internal details and complex implementation of a class/object and showing
//only the neccessary features of an ibject is called as abstraction.
//if a class is defined as abstract. then we cant instatiate that class.
//if a method id declared as a abstract method then the class has to be defined as abstract class.
// in cases of inheritance if the child class is inheriting the parent abstarct class then all the abstract methods in the parent class has to implemted in the child class.
// It allows  to create models or representations of real-world objects or systems that capture the important aspects without getting into the nitty-gritty details.
abstract class parent2{

     public void print()
     {
         System.out.println("My name is Sid");
     }
    abstract public void methodAbstract();
     abstract public int addTwoNumbers(int a, int b);

}

class child1 extends parent2
{
    @Override
    public int addTwoNumbers(int a, int b) {
        return  a+b;
    }

    @Override
    public void methodAbstract() {
        System.out.println("My name is sid");
    }
}


abstract class child2 extends parent2{

    @Override
    public void print() {
        super.print();
    }
    public void methodToPrintName()
    {
        System.out.println("Nagesaaa");
    }
}

public class CWH_53_AbstractClass {
    public static void main(String[] args) {

        child1 n= new child1();
        System.out.println(n.addTwoNumbers(5,5));
        n.methodAbstract();
        n.print();

    }
}
