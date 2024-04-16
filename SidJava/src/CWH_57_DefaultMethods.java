

//Default Methods:A default method is a method defined in an interface with a default implementation.
//It is declared using the default keyword.
//Default methods were introduced to maintain backward compatibility when evolving interfaces.
//Existing code that implements an interface won't break if a new method is added to the interface with a default implementation.
//Interfaces can be evolved by adding new default methods without affecting existing classes that implement the interface.
//Existing classes that implement the interface can choose to override the default method if needed.
//Its like if we want to update the interface without breaking the classes which are implemented the interface which we are trying to update. we use default methods.


interface Phone1{
    void call();
    void ring();
}
interface Cellphone1 extends Phone1{
    @Override
    void call();

    @Override
    void ring();
    void CantactDetails();
}

interface  camera{
     void takePic();
     void viewPhoto();
     default void resolution()
     {
         System.out.println("4k resolution for photos");
     }
}

class SmartPhone1 implements Cellphone1,camera{

    @Override
    public void ring() {
        System.out.println("The phone is Ringing");
    }

    @Override
    public void call() {
        System.out.println("Dial the number to call");
    }

    @Override
    public void CantactDetails() {
        System.out.println("Contact Details are");
    }

    @Override
    public void takePic() {
        System.out.println("Taking a Picture");
    }

    @Override
    public void viewPhoto() {
        System.out.println("Pic is nice");
    }
}


class Iphone extends SmartPhone1{

    void ringTone(){
        System.out.println("Iphone ringtone");
    }

    @Override
    public void CantactDetails() {
        super.CantactDetails();
        {
            System.out.println("Iphone contact details");
        }
    }
   @Override
   public void resolution(){
       System.out.println("8k resolution");
    }

}
public class CWH_57_DefaultMethods {
    public static void main(String[] args) {


        Iphone myPhone=new Iphone();

        myPhone.CantactDetails();
        myPhone.resolution();
        myPhone.ringTone();
    }
}
