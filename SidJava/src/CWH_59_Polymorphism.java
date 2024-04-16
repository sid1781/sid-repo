//1. Compile-time (Static) Polymorphism:
//Compile-time polymorphism is achieved through method overloading. Method overloading allows a class to have multiple methods with the same name but different parameter lists (different number or types of parameters).


//2. Runtime (Dynamic) Polymorphism:
//Runtime polymorphism is achieved through method overriding and is associated with inheritance. When a subclass provides a specific implementation for a method that is already defined in its superclass, it overrides the method. This allows an object of the subclass to be treated as an object of its superclass.

//Method overRiding:
//Method Name, Return Type, and Parameter Types:
//The overriding method must have the same method signature as the overridden method in the superclass.
//This includes the method name, return type, and parameter types.

//The overriding method's access level (visibility) must be the same as or less restrictive than the overridden method's access level.
//You cannot override a method with a more restrictive access modifier (e.g., you cannot override a protected method with a private method).

//Dynamic method Dispatch in java:
//When you have a superclass reference to a subclass object, the method that gets called is determined at runtime based on the actual type of the object.

class Animal {
    void makeSound() {
        System.out.println("Generic Animal Sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}
public class CWH_59_Polymorphism {
    public static void main(String[] args) {

        Animal myDog = new Dog();
        myDog.makeSound();  // Calls the makeSound method in Dog class

        // Dog dg= new Animal();  Not allowed.

    }
}
