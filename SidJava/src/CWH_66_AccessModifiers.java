//Access specifiers:
//Access specifiers, also known as access modifiers, in Java are keywords that determine the visibility and accessibility of a class, field, method, or constructor within a program.


//Table        class    package  subclass world(global)
// public       YES       YES      YES        YES
//protected     YES        YES     YES        NO
//default       YES        YES      NO         NO
//private       YES        NO       NO        NO


//If we are there in the seperate package then we cant use default variables or methods.
//Public (public):
//
//The most permissive access level.
//        A public class, method, field, or constructor is accessible from any other class in the Java environment.
//java
//Copy code
//public class MyClass {
//    public int myField;
//    public void myMethod() {
//        // ...
//    }
//}
//Private (private):
//
//The most restrictive access level.
//        A private class, method, field, or constructor is only accessible within the same class. It is not visible to any other class.
//java
//Copy code
//public class MyClass {
//    private int myField;
//    private void myMethod() {
//        // ...
//    }
//}
//Protected (protected):
//
//Allows access to the class, method, or field within the same package or by subclasses, even if they are in a different package.
//Used to implement encapsulation and inheritance.
//java
//Copy code
//public class MyClass {
//    protected int myField;
//    protected void myMethod() {
//        // ...
//    }
//}
//Default (Package-Private or No Specifier):
//
//When no access specifier is specified, the default access level is package-private.
//A class, method, or field with default access is only accessible within the same package.
//java
//Copy code
//class MyClass {
//    int myField;
//    void myMethod() {
//        // ...
//    }
//}

class  C1{

     public int a=5;
     protected int b=6;
     int c=7;
     private int d=8;

     public void print()
     {
         System.out.println(a);
         System.out.println(b);
         System.out.println(c);
         System.out.println(d);
     }
}

class  D1 extends  C1{

       public void print1()
       {
           System.out.println(a);
           System.out.println(b);
           System.out.println(c);
//           System.out.println(d);
       }
}

public class CWH_66_AccessModifiers {
    public static void main(String[] args) {


        C1 c = new C1();
        c.print();
    }
}
